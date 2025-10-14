// the user input
const prompt = require('prompt-sync')();

let input = prompt("temperature in Celsius");
let f = (input * 1.8) + 32;

//display
console.log(`temperature in Fahrenheit: ${f}`);

