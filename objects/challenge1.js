/*
Challenge 1: Beginner Level

Create an object car with the properties brand, model, year, and display them.

From the car object, display only the brand and year.

Modify the year of the car and display the updated object.

Add a new property color to the car object.

Delete the model property from the car object.
*/

let car = {
    brand : "audi",
    model : "Q3 Rs",
    year : 2025,
}
 
console.log(car);

console.log(`the brand : ${car.brand}`);
console.log(`year : ${car.year}`);

car.year = 2020;

console.log(`the year of the car after the update: ${car.year}\n`);

car.color = "black mate";
console.log(`the colore of the car: ${car.color}\n`);

delete car.year;
console.log(car);
