//Create a function maxArray(arr) that returns the largest element in an array.
let arr = [22,2,3,4]; let max = arr[0];
function maxArray(arr){
    for(let i = 0; i < arr.length; i++){
        if(max < arr[i]){
            max = arr[i];
        }
    }
return max;
}

console.log('the largest number is : ', maxArray(arr));