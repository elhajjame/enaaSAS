/*
Challenge 7: Circumference of a Circle
Write a program that asks for the radius of a circle and calculates its circumference.
Formula:

C = 2 * Math.PI * r
*/

const prompt = require('prompt-sync')();

let radius = prompt("enter the radius of a circle: ");

let c = 2 * Math.PI * radius;

console.log(`the traval time is : ${c.toFixed(2)} `);




