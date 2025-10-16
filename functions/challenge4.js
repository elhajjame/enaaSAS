//Reversed Array Write a function reverseArray(arr) that returns a new array with the elements reversed.

let swap;
function reverseArray(arr)
{
   for(let i = 0; i < arr.length / 2; i++){

      swap = arr[i];
      arr [i] = arr[arr.length - 1 -i];
      arr[arr.length - 1 -i] = swap;

   }
   return arr;
}

let arr = [1,2,3,4];
console.log(reverseArray(arr))