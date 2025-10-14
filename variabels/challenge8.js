const prompt = require('prompt-sync')();

let num = prompt("enter 3 numbers:  ");

if(num.length === 3){
    let reverse = num.split('').reverse().join('');
    console.log(reverse);
}
else console.log('enter 3 numbers!');

