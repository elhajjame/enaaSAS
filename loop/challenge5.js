/*
**Challenge 5: Display Prime Numbers Up to n**
Write a program that asks for an integer **n**, then displays all the prime numbers from **2** up to **n**.
*/

const prompt = require('prompt-sync')();

let input;

input = prompt("enter a number: ");

for(let i = 2; i < input; i++)
{
    if(i <= input){
        console.log(i+1);
    }
}