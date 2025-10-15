
const prompt = require('prompt-sync')();

let i = 1;
let sum = 0;
let max = 0;
let num;

while(num != 0){
      num = Number(prompt("enter a number less than 100, (press 0 to stop): "));
    
     if(num<0 || num > 100){
          console.log("invalide number !")     
     }
     if(num > max){
          max = num;
     }
     sum =sum+ num;
     
     
}
console.log(sum);
console.log(max);