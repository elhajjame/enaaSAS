//Write a function arrayProduct(tab) that calculates the product (multiplication) of all the elements.
let arr = [];
function arrayProduct(arr){
    let multi = 1;

    for(let i = 0; i < arr.length; i++){
        multi = multi * arr[i];
    }

    return multi;
}

const prompt = require('prompt-sync')();

const size = prompt("enter the size of the array: ");

for(let i = 0; i < size; i++){
    const element = Number(prompt(`number ${i+1}:  `));
    arr.push(element);
}
console.log(arrayProduct(arr));