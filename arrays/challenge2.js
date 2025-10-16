/*
Challenge 2: Sum and Average of an Array
Write a program that reads an array of 10 integers, calculates the sum and the average,
then displays the results.
*/

let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let i, sum = 0, avrage;

for(i = 0; i < 10; i++)
{
    sum = sum + arr[i];
    avrage = sum / arr.length;
}
console.log(`the sum of the array is : ${sum}` );
console.log(`the average of the array is : ${avrage}` );