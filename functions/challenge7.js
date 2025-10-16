//Create a function average(tab) that returns the average of the values in the array.
let arr=[];
const prompt = require('prompt-sync')();

const size = prompt('the size of the aarry: ');
for(let i = 1; i <= size; i++){
    let number = Number(prompt(`number ${i} : `));
    arr.push(number);
}

function average (arr){
    let avr = 0;
    let sum = 0;
    for( let i = 0; i < arr.length; i++){
        sum = sum + arr[i];
        avr = sum / arr.length;
    }
    return avr;
}
console.log(average(arr));
