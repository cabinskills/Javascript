let x = [1, 2, 3, 4, 6, 7, 8, 4, 2];
console.log("Original array:")
console.log(x)
let y = [...x];
x.push(5);
console.log("Clone of the said array:")
console.log(y)
console.log(x)