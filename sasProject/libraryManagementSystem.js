const prompt = require('prompt-sync')();
let book = [];
let subscr = [];
let looan = [];

function addOneBook() {
    let bookTitle = prompt("enter the title of the book: ");

    let bookAuthor = prompt("enter the Author of the book: ");

    let bookPublication = Number(prompt("Publication year: "));
    const objBook = { id: book.length + 1, title: bookTitle, author: bookAuthor, year: bookPublication, available: true, };
    book.push(objBook)
}

function add() {
    const bookSize = prompt("how many book do you want to add? ")

    for (let i = 0; i < bookSize; i++) {
        console.log(`\n=== Adding book ${i + 1} of ${bookSize} ===`);

        let bookTitle = prompt("enter the title of the book: ");
        let bookAuthor = prompt("enter the Author of the book: ");
        let bookPublication = Number(prompt("Publication year: "));

        const objBook = { id: book.length + 1, title: bookTitle, author: bookAuthor, year: bookPublication, available: true, };
        book.push(objBook);
    }
}

function display() {

    if (book.length == 0) {
        console.log("the library is empty.\n");
        const addChoose = prompt("would you like to add book (yes / no) : ");
        if (addChoose == "yes") {
            addOneBook();
        } else return;
    }
    for (let i = 0; i < book.length; i++) {
        disp = book[i];
        console.log(`book id : ${disp.id},  book title:  ${disp.title}, book author: ${disp.author},  Publication year : ${disp.year}, availibl: ${disp.available}`);
    }

}

function SortByTitle() {

    console.log("================== sort menu==================");
    console.log("1- sort ascending (A - Z).");
    console.log("2- sort descending (Z - A).");
    const sortInput = prompt("choose from the menu: ");
    if (book.length == 0) {
        console.log("the library is empty.");
        const addChoose = prompt("would you like to add book (yes / no) : ");
        if (addChoose == "yes") {
            addOneBook();
        } else return;
    }
    else if (sortInput == 1) {
        book.sort((a, b) => a.title.localeCompare(b.title))
        console.log(book);
    } else if (sortInput == 2) {
        book.sort((a, b) => b.title.localeCompare(a.title))
        console.log(book);
    } else return;
}

function sortByYear() {
    book.sort((a, b) => a.year - b.year);
    console.log("books sort by year: ", book)
};

function onlyAvailable() {
    let onlyDispo;
    if (book.length == 0) {
        console.log("the library is empty!");
        const addChoose = prompt("would you like to add book (yes / no) : ");
        if (addChoose == "yes") {
            addOneBook();
        }
    }
    
    for (let i = 0; i < book.length; i++) {
        if (book[i].available == true) {
            onlyDispo = book[i];
            console.log(`book id : ${onlyDispo.id},  book title:  ${onlyDispo.title}, book author: ${onlyDispo.author},  Publication year : ${onlyDispo.year}, availibl: ${onlyDispo.available}`);
        }
    }
}

function search() {
    if (book.length == 0) {
        console.log("the library is empty !");
        const addChoose = prompt("would you like to add book (yes / no) : ");
        if (addChoose == "yes") {
            addOneBook();
        }
    }
    let saerchById = prompt("saerch on the the book by id:");

    let found = false;
    for (let i = 0; i < book.length; i++) {
        if (saerchById == book[i].id) {
            console.log(`id:  ${book[i].id},  book title:   ${book[i].title}, author :   ${book[i].author}  Publication year : ${book[i].year}, availibl: ${book[i].available}`);
            found = true;
        }
    }
}

///////////////////////////// Subscriber Management function ///////////////////////////////////

function createAcc() {
    let firstName = prompt("first name : ");
    let lastName = prompt("last name : ");
    let memberMial = prompt("e-mail : ");

    const sub = { id: subscr.length + 1, firstName: firstName, lastName: lastName, email: memberMial };
    subscr.push(sub);
}

function memberDispaly() {
    if (subscr.length == 0) {
        console.log(" No subscribers found. Would you like to subscribe? (yes/no) ");
        const choice = prompt("");
        if (choice == "yes") {
            createAcc();
        } else return;
    }
    console.log("\n=== List of Subscribers ===");
    for (let i = 0; i < subscr.length; i++) {
        let dispMembers = subscr[i];
        console.log(`member id : ${dispMembers.id}, first name: ${dispMembers.firstName}, last name: ${dispMembers.lastName}, e-mail: ${dispMembers.email}`);
    }
}

//////////////////////// loan Management///////////////////////////

function loan() {
    let member;
    let findbook;
    let memberId = Number(prompt("enter you member id: "));
    let bookid = Number(prompt("enter the book id: "));
    let loanDate = prompt("enter the date: ")

    for (let i = 0; i < subscr.length; i++) {
        if (memberId == subscr[i].id) {
            member = subscr[i];
            break;
        }
    }
    if (!member) {
        console.log("member not found!");
        return;
    } else console.log("member: ", member);

    for (let j = 0; j < book.length; j++) {
        if (bookid == book[j].id) {
            findbook = book[j];
            break;
        }
    }
    if (!findbook) {
        console.log("book not found!");
        return;
    }

    if (findbook.available == false) {
        console.log("sorry the book not available fot the moment.")
        return;
    }

    findbook.available = false;
    looan.push({ memberId, bookid, loanDate });
    console.log("book: ", findbook);
    console.log("Loan registered successfully!");
}


/////////////////////////////main menu///////////////////////////////////
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

        if (input == "0") {
            console.log("do you want to quit (yes / no): ");
            const quite = prompt("")
            if (quite == "yes") {
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
                membersMenu();
                break;

            case "5":
                loan()
                break;
            default: console.log("invalid input, please choose from the menu.");
        }
    }
};

function subMenu() {
    while (true) {
        console.log("======== Book Operations ========");
        console.log("1- Display all books.");
        console.log("2- Sort books by title (ascending/descending).");
        console.log("3- Sort books by publication year.");
        console.log("4- Display only available books.");
        console.log("5- saerch for a book by Id.");
        console.log("0- back to the main menu.");

        const menuInput = prompt("choose from the menu : ");

        if (menuInput == "0") {
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
                search()
                break;
            default: console.log("invalid input, please choose from the menu.");
        }
    }
};

//////////////////////// member menu//////////////////////////
function membersMenu() {
    while (true) {
        console.log("====================== subscriber menu ======================\n");
        console.log("1- create an account : ");
        console.log("2- display all members : ");
        console.log("0- back to the main menu.")

        const subinput = prompt("choose an number: ");

        if (subinput == "0") {
            break;
        }

        switch (subinput) {
            case "1":
                createAcc();
                break;

            case "2":
                memberDispaly()
                break;
            default: console.log("invalid input, please choose from the menu.");
        }
    }
}


mainMenu();