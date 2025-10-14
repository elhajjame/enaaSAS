
const prompt = require('prompt-sync')();

 let a = prompt("enter a number : ");
 let b = prompt("enter a number : ");
 let c = prompt("enter a number : ");
 
let temp = a;
 a = b;
 b = c;
 b = temp;

 console.log(a,b,c);
