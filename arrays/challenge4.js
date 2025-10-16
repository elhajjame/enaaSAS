const prompt = require('prompt-sync')();

let arr = [], i = 0, found = 0;

while(arr.length < 3){
const element = prompt('enter three strings : ');
arr.push(element);
i++;
}

const search = prompt("search for: ");

i = 0;
while(i < arr.length){
    
    if(arr[i] === search){
        console.log(`the index is : ${i}` );
        found = 1; 
        break;
    }
    i++;
}
if(found == 0){console.log("the indix not found!")}