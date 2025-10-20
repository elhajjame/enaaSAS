/*
let Objectsname = {
    key1 : value, // key : propety name -- value : propety value;
    key2 : value,
    key3 : value,
}
*/

///////////////// type of object //////////////////////

// type 1 : literal object

let car = {
    brand : "toyota",
    model : 2021,
    coler : "black",
}

console.log(car.coler);
console.log(car.brand);

// type 2 : constructor function

function person(name, age, hight){
    this.name = name;
    this.age = age;
    this.hight = hight;
}

let mehdi = new person("mehdi", "24", "180")
    console.log(mehdi.name);
    console.log(mehdi.hight)

//type 3: objects.create()    

let animal = {
    name : "african lion",
    age : 4,
    sound : function(){
        console.log(`${this.name} make a loud sound`)
    }
};

let tiger = Object.create(animal)
tiger.name = "moosd";

tiger.sound();

// loop inside object

let student = {
    name : ["mehdi", "ali", "nabil"],
    age : 18,
    classRoom : 19,
};

const keys = Object.keys(student);

console.log(keys);

const values = Object.values(student);
console.log(values);

// just how to use some functions like push(), pop()...

const fruits = [{name : "appel", color: "green", calorise : 80},
                {name : "banana", color: "yellow", calorise : 100},
                {name : "orange", color: "green", calorise : 67},
                {name : "peach", color: "red", calorise : 33}];

                console.log(fruits[0].color)            
                
                fruits.forEach(fruits => console.log(fruits.name));
// push() method:

//fruits.push({name : "couconat", color: "white", calorise : 55});

// splice() method: 

//fruits.splice(1,2)

//console.log(fruits);

//fruits.pop(1,2)
//console.log(fruits);

//      --------------------------- foreach ------------------------------------




