//Create an object entreprise that contains an adresse object (street, city, postalCode).Display the city.

const entreprise = {
    adresse : {street: "mohammed 6", city: "beni mellal", codePostal: 23000}
};
console.log(entreprise.adresse.city);

// Create an array produits of objects { name, price, quantity }.
// Display the total value in stock (price × quantity for each product).

const produits = [{name : "laptop", price : 3000,quantity: 10 },
                {name : "phone", price : 2000,quantity: 30 },
                {name : "watch", price : 2000,quantity: 30 }]

let resulte =0;
for(let i = 0; i <= produits.length-1; i++ ){
resulte += produits[i].price * produits[i].quantity
}
console.log(resulte)

// In an employees array, find all those who have a salary > 3000.
// Create a function clone(obj) that returns a copy of the given object

const employees = [{name : "mojhamed", salary : 1000 },
                {name : "ali", salary : 455},
                {name : "aziz", salary  : 500 }]


