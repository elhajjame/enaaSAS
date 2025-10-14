const prompt = require('prompt-sync')();

let grade = prompt("enter your garde: ");

if(grade >= 90 && grade <= 100)
{
    console.log("your grade is A ");
}else if(grade >= 80 && grade <= 89){
    console.log("your grade is B ");
} else if(grade >= 70 && grade <= 79){
    console.log("your grade is C ");
}else if(grade >= 60 && grade <= 69){
    console.log("your grade is D ");
}else console.log("your garde is F ");