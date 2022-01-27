var name;
var email;
var dob;
var phone;
var names = [];
var names2;
var usertr = document.getElementById("nameTR");
// ES5  //ES6
document.getElementById("form").addEventListener("submit", (event) => {
    event.preventDefault();
    Create();
    Read();
    document.getElementById("form").reset();
});

function Create() {
    let storage = JSON.parse(localStorage.getItem("names"));
    name = document.getElementById("name").value;
    email = document.getElementById("email").value;
    dob = document.getElementById("dob").value;
    phone = document.getElementById("phone").value;

    if (name == '') {
        const nameValid = document.getElementById('isNameValid')
        nameValid.innerHTML = "Name is required"
        nameValid.style.color = 'red'
    } else if (email == '') {
        const emailValid = document.getElementById('isEmailValid')
        emailValid.innerHTML = "Email is required"
        emailValid.style.color = 'red'
    } else {
        if (storage == null) {
            newData = {}
            newData['email'] = email
            newData['name'] = name
            newData['dob'] = dob
            newData['phone'] = phone

            names.push(newData);
            localStorage.setItem("names", JSON.stringify(names));
            alert('Data created Successfully')
            window.location.href = "index.html"

        } else {
            newData = {}
            newData['email'] = email
            newData['name'] = name
            newData['dob'] = dob
            newData['phone'] = phone
            names = JSON.parse(localStorage.getItem("names"));
            names.push(newData);
            alert('Data created Successfully')
            localStorage.setItem("names", JSON.stringify(names));
            window.location.href = "index.html"
        }
    }
}


function Read() {
    usertr.innerHTML = '';
    names2 = JSON.parse(localStorage.getItem("names"));
    if (names2 == null) {
        usertr.innerHTML += `
								<tr>
									<th>#</th>
									<th>Name</th>
									<th>Email</th>
									<th>DOB</th>
									<th>Phone</th>
									<th>Operation</th>
								</tr>
								<tr>
									<th colspan="">
										<span  style="text-align:center">No Data Found </span>
									</th>
								</tr>
							`
    } else {
        usertr.innerHTML += `
								<tr>
									<th>#</th>
									<th>Name</th>
									<th>Email</th>
									<th>DOB</th>
									<th>Phone</th>
									<th>Operation</th>
								</tr>
							`

        for (var i = 0; i < names2.length; i++) {
            usertr.innerHTML += `
			<tr>
				<td>${i + 1}</td>
				<td>${names2[i].name}</td>
				<td>${names2[i].email}</td>
				<td>${names2[i].dob}</td>
				<td>${names2[i].phone}</td>
				<td>
					<button Onclick="View(${i})">View</button>
					<button Onclick="Update(${i})">Edit</button>
					<button Onclick="Delete(${i})">Delete</button>
				</td>
			</tr></table>`;
        }
    }
}

function Update(updateId) {
    usertr.innerHTML = '';
    names4 = JSON.parse(localStorage.getItem("names"));
    usertr.innerHTML = '';
    usertr.innerHTML += `<tr><th>#</th><th>Name</th><th>Email</th><th>DOB</th><th>Phone</th><th>Operation</th></tr>`
    for (var i = 0; i < names4.length; i++) {
        if (i == updateId) {
            usertr.innerHTML += `
				<td>${i + 1}</td>
				<td><input type="text" name="updateName" id="updateName" value="${names4[i].name}"></td>
				<td><input type="text" name="updateEmail" id="updateEmail" value="${names4[i].email}"></td>
				<td><input type="date" name="updateDob" id="updateDob" value="${names4[i].dob}"></td>
				<td><input type="text" name="updatePhone" id="updatePhone" value="${names4[i].phone}"></td>

				<td>
					<button Onclick="Update2(${i})">Edit</button>
					<button Onclick="Read(${i})">Cancel</button>
				</td>
			`
        } else {
            `
			<tr>
				<td>${i + 1}</td>
				<td>${names2[i]}</td>
				<td>
					<button Onclick="Update(${i})">Edit</button>
					<button Onclick="Delete(${i})">Cancel</button>
				</td>
			</tr>
			`
        }
    }
}

function View(viewId) {
    usertr.innerHTML = '';
    names4 = JSON.parse(localStorage.getItem("names"));
    usertr.innerHTML = '';
    usertr.innerHTML += `<tr><th>#</th><th>Name</th><th>Email</th><th>DOB</th><th>Phone</th><th>Operation</th></tr>`
    for (var i = 0; i < names4.length; i++) {
        if (i == viewId) {
            usertr.innerHTML += `
				<td>${i + 1}</td>
				<td>${names4[i].name}</td>
				<td>${names4[i].email}</td>
				<td>${names4[i].dob}</td>
				<td>${names4[i].phone}</td>				
				<td><button onClick="Read()">Go back</button></td>
			`
        } else {
            `
			<tr>
				<td>${i + 1}</td>
				<td>${names2[i]}</td>
				<td>${names4[i].email}</td>
				<td>${names4[i].dob}</td>
				<td>${names4[i].phone}</td>
				<td><button onClick="Read()">Go back</button></td>
			</tr>
			`
        }
    }
}

function Update2(i) {
    let names5 = JSON.parse(localStorage.getItem("names"));
    names5[i].name = document.getElementById("updateName").value;
    names5[i].email = document.getElementById("updateEmail").value;
    names5[i].dob = document.getElementById("updateDob").value;
    names5[i].phone = document.getElementById("updatePhone").value;

    if (names5[i].name) {
        localStorage.setItem("names", JSON.stringify(names5));
        Read();
    } else if (names5[i].email) {
        localStorage.setItem("names", JSON.stringify(names5));
        Read();
    }
}

function Delete(i2) {
    let names3 = JSON.parse(localStorage.getItem("names"));
    names3.splice(i2, 1);
    localStorage.setItem("names", JSON.stringify(names3));
    Read();
}


// JSON PARSE - JSON STRINGYFY
// Eventlistner
// Es5 vs Es6 with syntax and the reason
// LocalStorage