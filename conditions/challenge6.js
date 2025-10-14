const prompt = require('prompt-sync')();

console.log("this programe to check leap year\n");

let year = prompt("enter a year: ");

if((year % 4 == 0 && year % 100 != 0) || (year % 400 == 0))
{
    console.log(`${year} is a leap year ! `);
}else console.log(`${year} is not leap year ! `);