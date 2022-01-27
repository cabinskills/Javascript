//Selectors
const todoInput = document.querySelector(".todo-input");
const todoButton = document.querySelector(".todo-button");
const todoList = document.querySelector(".todo-list");
const filterOption = document.querySelector(".filter-todo");

//Event Listeners
document.addEventListener("DOMContentLoaded", getTodos);
todoButton.addEventListener("click", addTodo);
todoList.addEventListener("click", deleteCheck);
filterOption.addEventListener("change", filterTodo);

//Functions

function addTodo(event) {
    //Prevent form from submitting
    event.preventDefault();
    //Todo DIV
    let task = todoInput.value.trim();
    let taskExist = checkTodoExist(task);

    if (task !== "" && !taskExist) {
        const todoDiv = document.createElement("div");
        todoDiv.classList.add("todo");

        //Check Mark button
        const completedButton = document.createElement("button");
        completedButton.innerHTML = '<i class="fas fa-check"></i>';
        completedButton.classList.add("complete-btn", "press-down");
        todoDiv.appendChild(completedButton);


        //Create LI
        const newTodo = document.createElement("li");

        newTodo.innerText = todoInput.value;
        newTodo.classList.add("todo-item");
        todoDiv.appendChild(newTodo);

        //Add Todo to Local Storage
        saveLocalTodos(todoInput.value);



        //Edit button
        const editButton = document.createElement("button");
        editButton.innerHTML = '<i class="fas fa-edit"></i>';
        editButton.classList.add("edit-btn");
        todoDiv.appendChild(editButton);


        //Delete button
        const deleteButton = document.createElement("button");
        deleteButton.innerHTML = '<i class="fas fa-trash"></i>';
        deleteButton.classList.add("delete-btn");
        todoDiv.appendChild(deleteButton);

        //Append to UL
        todoList.appendChild(todoDiv);

        todoInput.value = "";
    } else {
        if (taskExist) {
            alert("Task already exist");
        } else {
            alert("Please enter some task.");
        }

    }


}

function deleteCheck(e) {
    const item = e.target;
    //Delete ToDo
    if (item.classList[0] === "delete-btn") {
        const todo = item.parentElement;
        //Adnimation
        todo.classList.add("deleted");
        //Remove element
        removeLocalTodos(todo);
        todo.addEventListener("transitionend", function() {
            todo.remove();
        });
    }

    //Check Mark
    if (item.classList[0] === "complete-btn") {
        console.log(e.target);
        const todo = item.parentElement;
        const button = e.target;
        todo.classList.toggle("completed");
        button.classList.toggle("press-down");
    }
}

function filterTodo(e) {
    const todos = todoList.childNodes;

    todos.forEach(function(todo) {
        console.log(e.target.value);
        switch (e.target.value) {
            case "all":
                todo.style.display = "flex";
                break;
            case "completed":
                if (todo.classList.contains("completed")) {
                    todo.style.display = "flex";
                } else {
                    todo.style.display = "none";
                }
                break;
            case "uncompleted":
                if (!todo.classList.contains("completed")) {
                    todo.style.display = "flex";
                } else {
                    todo.style.display = "none";
                }
                break;
        }
    });
}

function checkTodoExist(todo) {
    let todos;
    if (localStorage.getItem("todos") === null) {
        return false;
    } else {
        todos = JSON.parse(localStorage.getItem("todos"));
        if (todos.includes(todo)) {
            return true;
        } else {
            return false;
        }
    }
}

function saveLocalTodos(todo) {
    //Check if there is anything in local storage
    let todos;
    if (localStorage.getItem("todos") === null) {
        todos = [];
    } else {
        todos = JSON.parse(localStorage.getItem("todos"));
    }
    todos.push(todo);
    localStorage.setItem("todos", JSON.stringify(todos));
}

function getTodos() {
    //Check if there is anything in local storage
    let todos;
    if (localStorage.getItem("todos") === null) {
        todos = [];
    } else {
        todos = JSON.parse(localStorage.getItem("todos"));
    }

    todos.forEach(function(item, index) {
        //Todo DIV
        const todoDiv = document.createElement("div"); // <div></div>
        todoDiv.classList.add("todo"); // <div class="todo"></div>

        //Check Mark button
        const completedButton = document.createElement("button");
        completedButton.innerHTML = '<i class="fas fa-check"></i>';
        completedButton.classList.add("complete-btn", "press-down");
        todoDiv.appendChild(completedButton);

        //Create LI
        const newTodo = document.createElement("li"); // <li></li>

        newTodo.innerText = item;
        newTodo.classList.add("todo-item");
        todoDiv.appendChild(newTodo);



        //Edit button
        const editButton = document.createElement("button");
        editButton.innerHTML = '<i class="fas fa-edit"></i>';
        editButton.classList.add("edit-btn");
        todoDiv.appendChild(editButton);

        //Delete button
        const deleteButton = document.createElement("button");
        deleteButton.innerHTML = '<i class="fas fa-trash"></i>';
        deleteButton.classList.add("delete-btn");
        todoDiv.appendChild(deleteButton);

        //Append to UL
        todoList.appendChild(todoDiv);
    });
}

function removeLocalTodos(todo) {
    let todos;
    if (localStorage.getItem("todos") === null) {
        todos = [];
    } else {
        todos = JSON.parse(localStorage.getItem("todos"));
    }
    const todoIndex = todo.children[0].innerText;
    console.log(todoIndex);
    todos.splice(todos.indexOf(todoIndex), 1);
    localStorage.setItem("todos", JSON.stringify(todos));
}