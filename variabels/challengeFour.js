const prompt = require('prompt-sync')();

let a = Number (prompt("enter a nember : "));
let b = Number (prompt("enter a nember : "));

let addition = a + b;
let sub = a - b;
let multi = a * b;
let div = a / b;
let mod = a % b; 

console.log(`${a} + ${b} = ${addition}`);
console.log(`${a} - ${b} = ${sub}`);
console.log(`${a} x ${b} = ${multi}`);
console.log(`${a} / ${b} = ${div}`);
console.log(`${a} % ${b} = ${mod}`);