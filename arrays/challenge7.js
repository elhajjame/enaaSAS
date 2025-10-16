/*
Loop through each character of the string.

Check if the character is a vowel (a, e, i, o, u, y).

Keep a counter and increase it every time you find a vowel.
*/
let arr = [];
const vowels = ['a','e','i','o','u','y'];

const prompt = require('prompt-sync')();
let str = prompt("Enter a string: ");
arr.push(str);

for(let i = 0; i < arr.length; i++){
    let firsChar = arr[i];
    if(vowels.includes(firsChar)){

        console.log(arr[i]);
    }
}