const prompt = require('prompt-sync')();

let title = [];
let author = [];
let price = [];
let quantity = [];
let arrSize = [];

function addBook(){
    let arrSize = prompt("enter number of books that you want to add :  ");
    for(let i = 0; i <= arrSize; i++){

    console.log(`====================== book number : ${i+1} ======================`);    
    
    let bookTitle = prompt("enter the name of the book : ");
        title.push(bookTitle);
    let bookAuthor = prompt("enter the name of author : ")
        author.push(bookAuthor);
    let bookPrice = Number (prompt("enter the price : "));
        price.push(bookPrice);
    let bookQuantity = Number (prompt("enter the quantity : "));
        quantity.push(bookQuantity);

    }
}

function display (){
    if(title.length == 0){
        console.log("still no book added !")
    }else{
    for(let i = 0; i < title.length; i++){
        console.log(`*** ${title[i]} by ${author} price: ${price} quantity: ${quantity} ***`);
        }
    }    
}

function searchfunction (){
    let bookName = prompt("Enter the book name to search: ");
    for(let i = 0; i < title.length; i++){
        if(bookName == title[i]){
        console.log(`${title} by ${author} price: ${price} quantity: ${quantity}`);
        break;
        }else console.log("the book dosen't exist. ");
    }
    
}

function update (){
    let bookName = prompt("enter the book name: ");
    found = false;

    for(let i = 0; i <= title.length; i++){
        if(bookName == title[i])
        {
            console.log(`the book ${title[i]}, by ${author}`);

            let newPrice = prompt("enter the new price : ");
                price[i] = newPrice;
        
                let newQuantity = prompt("enter the new quantity : ");
                    quantity[i] = newQuantity;
                    
                    console.log(`Book updated successfully!`);
                    found = true;
                    break; 
        }

    }
    if(!found) {
        console.log('the book not found !');
    }
}

function total (){
    let total = 0;
    for(let i = 0; i < quantity.length; i++){
        total = total + quantity[i];
    }
    console.log(`total of books: ${total}`);
}

function deletefunction(){
   let Delete = prompt("enter the name of the book that you want to delet: ");
    for(let i = 0; i < title.length - 1; i++){
        if(Delete === title[i]){

            title[i] = title [i + 1];
            title --;
        }

    }
}

while(true){
     console.log("********************* Main menu *********************\n");

        console.log("1-  Add a book to the stock.")
        console.log("2-  Display all available books.");
        console.log("3-  Search for a book by its title.");
        console.log("4-  Update the quantity of a book.");
        console.log("5-  Delete a book from the stock.");
        console.log("6-  Display the total number of books in stock.");
        console.log("0-  Exit");

const input = prompt("enter number : ")
    if(input == "0"){
        console.log("goodbye!");
        break;
    }
    switch(input){

        case "1":
            addBook();
            break;
        case "2":
            display();
            break;
        case "3":
           searchfunction();
           break;
        case "4":
            update();
            break;
        case "5":
            deletefunction();
            break;
        case "6":
          total();
        default : console.log("please choose from the menu !")
                              
    }     
}