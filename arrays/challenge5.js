const prompt = require ('prompt-sync')();

let input = [], i ;

for(i = 0; i < 7; i++){
    const element = Number(prompt(`enter 7 ingers ${i+1}: `));
    input.push(element);
}

console.log("the max is : ", Math.max(...input)); // this functions to know the larger number in the array and we use Math.min to know the small number in the array.
console.log("the min is : ", Math.min(...input));
