const prompt = require('prompt-sync')();

let numberOne = Number(prompt("enter a number one: "));
let numberTwo = Number(prompt("enter a number two: "));

if(isNaN(numberOne) || isNaN(numberTwo))
{
    console.log("not valid! please enter a number");
}else if(numberOne < numberTwo)
{
    console.log(`The larger number is: ${numberTwo}`);
}else if(numberOne > numberTwo)
{
    console.log(`The larger number is: ${numberOne}`);
}else console.log("the numbers are equal !")

