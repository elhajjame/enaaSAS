/* 
Create an object student with the properties name, age, and a method introduceYourself() that displays:
"Hello, my name is [name] and I am [age] years old."
*/

let student = {
    name : "mehdi",
    age: 24,
    intrudceYourSelf : function(){
        console.log(`my name is ${student.name} and I'm ${student.age} years old `)
    }
};

student.intrudceYourSelf(student.name, student.age);

// Create an object person and display all its keys and values using a for...in loop.
let person = {
    name : "mohammed",
    age : 30,
    job : "teacher",
};

for (let key in person){
let value = person[key];
console.log(key, value);
}

// Create an object classroom that contains a property students (an array of names).
// ➜ Add a method displayStudents() that displays each student.

let classRoom = [{
    studentNames : ["ali", "mohammed", "mehdi", "omar"],
}]

classRoom.forEach(item => console.log(item.studentNames) );

// Create an array books containing 3 objects { title, author, year }.
// ➜ Display only the titles using a loop.

let books =[ {title : "the power of dirham", author : "zoo", year : 2025},
            {title : "book 2", author : "author 2", yaer : 2000 },
            {title : "book 3", author : "author 3", yaer : 2222 }
]
let containr ;
for(let i = 0; i < books.length; i++){
 containr = books[i].title;

 console.log(containr)
}
// here im using forEach method
books.forEach(books => console.log(books.title));

// In the books array, write a function findBook(title) that returns the object corresponding to that title.



function findBook(title){
        for(let i = 0; i <= books.length; i++){
            if(books[i]?.title == title){
                return books[i]
            }
        }
        return "the book not availibl"
}   
console.log(findBook("book 2"))