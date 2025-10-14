const prompt = require('prompt-sync')();

let age = prompt('enter your age: ');
    console.log("\n");

if(age >= 18)
{
    console.log("eligible to vote !");
}else console.log("Not eligible ! ");