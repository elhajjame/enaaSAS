//Create a function countOccurrences(arr, value) that counts how many times value appears in the array.

function countOccurrences(arr, value){
   let count = 0;
    for(let i = 0; i < arr.length; i++){
    if(arr [i] == value){
        count ++;
    }
    return count;
}
  
}
let arr = [4,23,4,3];
countOccurrences(arr,4);