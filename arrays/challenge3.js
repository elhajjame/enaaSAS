const prompt = require('prompt-sync')()

let arr = [], i = 0, found = 0;


while(arr.length < 8){
    const element = Number(prompt("enter the elemnt: "))
    arr.push(element);
    i++;
}

const search = Number(prompt("search for :  "));

i = 0;
while(i < arr.length ){

    if( arr[i] === search){
    console.log(`the element : ${arr[i]} is exist in the index ${i}`);
        found = 1;
        break;
    }

    i++;
}
if(found == 0){
    console.log("the element not found !")
}
