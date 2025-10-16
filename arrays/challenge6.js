const prompt = require ('prompt-sync')();

let input = [], square ;

for(let i = 0; i < 4; i++){
    const number = Number(prompt(`enter integer ${i+1}: `));
    input.push(number);
}
for(let i = 0; i < input.length; i++){

    square = input[i] * input[i];
    console.log(square)
}
