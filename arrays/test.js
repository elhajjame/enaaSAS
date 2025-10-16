const prompt = require('prompt-sync')();

let arr = ["mehdi", "mohammed", "12", 123, ["ali", 1200]]; // array in array we called nested array.

//console.log(`${arr [0]}`);
//console.log(`${arr [2][1]}`);
console.log(arr [3]);
console.log(`${arr [4][0]}`);

//assising to the last element of an array
let lst = arr[arr.length-1]
console.log("the last element is", lst);

// Modifying the Array Elements method below:
console.log(arr);
arr [0] = "aziz";
console.log(arr);
arr [4][0] = "blah blah";
console.log(arr);

/////////////////////////////////////////////////////////////////////////////////////////

// adding an element to the array we use two methods push() unshift()
// push() : adding element to the end 
// unshift() : adding elemnet to the start of the array.

let cars = ["bmw", "dacia", "volvo"];

cars.push("golf");
console.log(cars);

cars.unshift("kia");
console.log(cars)