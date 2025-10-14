/*
Challenge 6: Travel Time
Ask for the time and speed of a car, and calculate the travel time.
Formula:
distance = speed * time
*/

const prompt = require('prompt-sync')();

let distance = prompt("enter the the distance: ");
let speed = prompt("enter the speed: ");

// distance = speed * time;
let time = distance / speed;

console.log(`the traval time is : ${time} `);