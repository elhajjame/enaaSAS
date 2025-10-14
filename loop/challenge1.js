const prompt = require ('prompt-sync')();

console.log("multiplication tabel")
console.log("\n");

let number = prompt("entre a number:  ");


for( let i = 0; i <= 10; i++ )
{
    let multi = i*number
    console.log(`${number} x ${i} = ${multi}`);
}
