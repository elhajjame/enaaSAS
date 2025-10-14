const prompt = require('prompt-sync')();

let a = Number(prompt("enter a number one: "));
let b = Number (prompt("enter a number two: "));
let c = Number (prompt("enter a number three : "));
let d = Number (prompt("enter a number four: "));

let sum = a + b + c + d;

console.log(`${a} + ${b} + ${c} + ${d} = ${sum}`);

let Average = sum / 4;

console.log(`the average is: ${Average}`);