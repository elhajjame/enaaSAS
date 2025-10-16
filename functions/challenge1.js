//Create a function sumArray(arr) that calculates and returns the sum of all the elements in the array.
    let sum = 0;
function sumArray(arr){

    for(let i = 0; i <arr.length; i++ ){

         sum = sum + arr[i];
    }
    return sum;
}
let arr = [1,2,3]
console.log(sumArray(arr));