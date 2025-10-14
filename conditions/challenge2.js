const prompt = require('prompt-sync')();


console.log("wellcom this programe to know if the number are negative or positive or is zero\n");

let number = prompt("enter a number: ");

if(number < 0 )
{
    console.log(`${number} is negative !`);
}
else if (number > 0)
{
    console.log(`${number} is positive !`);
} else  console.log("the number is zero!");