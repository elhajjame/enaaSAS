//Create a function filterEvens(tab) that returns a new array containing only the even numbers.
let arr = [2, 1, 4, 5, 7, 44, 212]

function filterEven(arr){
    let even = [];
for(let i = 0; i < arr.length; i++){
    if(arr[i] % 2 == 0){
        even.push(arr[i]);
        }
    }
     return even;
}

console.log(filterEven(arr));