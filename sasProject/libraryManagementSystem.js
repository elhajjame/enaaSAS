const prompt = require('prompt-sync')();
let book = [];
let subscr = [];

function addOneBook() {
    let bookTitle = prompt("enter the title of the book: ");

    let bookAuthor = prompt("enter the Author of the book: ");

    let bookPublication = prompt("Publication year: ");
    const objBook = { id: book.length + 1, title: bookTitle, author: bookAuthor, year: bookPublication, availibl: false, };
    book.push(objBook)
}

function add() {
    const bookSize = prompt("how many book do you want to add? ")

    for (let i = 0; i < bookSize; i++) {
        console.log(`\n=== Adding book ${i + 1} of ${bookSize} ===`);

        let bookTitle = prompt("enter the title of the book: ");
        let bookAuthor = prompt("enter the Author of the book: ");
        let bookPublication = prompt("Publication year: ");

        const objBook = { id: book.length + 1, title: bookTitle, author: bookAuthor, year: bookPublication, availibl: true, };
        book.push(objBook);
    }
}

function display() {

    if (book.length == 0) {
        console.log("empty library ");
    }
    for (let i = 0; i < book.length; i++) {
        disp = book[i];
        console.log(`book id : ${disp.id},  book title:  ${disp.title}, book author: ${disp.author},  Publication year : ${disp.year}, availibl: ${disp.disponible}`);
    }

}

function SortByTitle() {
    book.objBook.sort((a, b) => a.title.localeCompare(b.title));
}

function sortByYear() {
    book.sort((a, b) => a.year - b.year);
    console.log("books sort by year: ", book)
};

function onlyAvailable() {
    if (book.length == 0) {
        console.log("the library still empty!");
    }
    for (let i = 0; i < book.length; i++) {
        if (book[i].availibl == true) {
            onlyDispo = book[i].availibl;
            console.log(`book id : ${onlyDispo.id},  book title:  ${onlyDispo.title}, book author: ${onlyDispo.author},  Publication year : ${onlyDispo.year}, availibl: ${onlyDispo.disponible}`);
        }
    }
}

function saerch() {
    if (book.length == 0) {
        console.log("the library still empty !");
    }
    let saerchById = prompt("search on the the book by id:");

    let found = false;
    for (let i = 0; i < book.length; i++) {
        if (saerchById == book[i].id) {
              console.log(`id:  ${book[i].id},  book title:   ${book[i].title}, author :   ${book[i].author}  Publication year : ${book[i].year}, availibl: ${book[i].disponible}`);
            found = true;
        }
    }
}

///////////////////////////// Subscriber Management function ///////////////////////////////////

function subscriber() {
    const firstName = prompt("first name : ");
    const lastName = prompt("last name : ");
    const email = prompt("e-mail : ");

    sub = { id: subscr.length + 1, name: firstName, last: lastName, email: subemail };
    subscr.push(sub);
}

function subMenu() {
    while (true) {
        console.log("======== Book Operations ========");
        console.log("1- Display all books.");
        console.log("2- Sort books by title (ascending/descending).");
        console.log("3- Sort books by publication year.");
        console.log("4- Display only available books.");
        console.log("5- Search for a book by Id.");
        console.log("0- back to the main menu.");

        const menuInput = prompt("choose from the menu : ");

        if (menuInput == 0) {
            break;
        }

        switch (menuInput) {
            case "1":
                display();
                break;

            case "2":
                SortByTitle();
                break;

            case "3":
                sortByYear()
                break;

            case "4":
                onlyAvailable();
                break;

            case "5":
                 saerch()
                break;
        }
    }
};

function mainMenu() {
    while (true) {

        console.log("====================== Main menu ======================\n");

        console.log("1-  Add Book.");
        console.log("2-  Add Multiple Books.");
        console.log("3-  Book Operations.");
        console.log("4-  Subscriber Management.");
        console.log("5-  Borrowing Management.");
        console.log("0-  Exit");

        const input = prompt("choose from the menu : ");

        if (input == 0) {
            console.log("do you want to quite y/n: ");
            const quite = prompt("")
            if (quite == "y") {
                console.log("goodbye!")
                break;
            } else continue;
        }


        switch (input) {
            case "1":
                addOneBook();

                break;
            case "2":
                add();
                break;

            case "3":

                subMenu();
                break;

            case "4":
                subscriber();
                break;

            case "5":

                break;
        }
    }
};

mainMenu();