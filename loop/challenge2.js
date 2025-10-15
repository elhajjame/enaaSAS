const prompt = require ('prompt-sync')();

console.log("prime number check")
console.log("\n");

let number = prompt("entre a positive number:  ");
let prime = true;

if(number == 0 || number == 1){
    console.log(`${number} is not prime !`);
}

for( let i = 2; i <= number/2; i++ ) // prime num is div by it selt and 1 
{
    if(number % i == 0){
        prime = false;
        break;
    }
}
if(prime){
     console.log(`${number} is prime !`);
}else console.log(`${number} is not prime !`);
