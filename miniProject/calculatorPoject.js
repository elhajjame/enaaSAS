
function addition(numberOne, numberTwo) {
    let result = numberOne + numberTwo;
    return result;
}

function subtraction(numberOne, numberTwo) {
    let result = numberOne - numberTwo;
    return result;
}

function multiplication(numberOne, numberTwo) {

    let result = numberOne * numberTwo;
    return result;
}

function division(numberOne, numberTwo) {
    if (numberTwo === 0) {
        console.log("invalid input!");
    }
    return numberOne / numberTwo;
}

function power(base, exponent) {
    let result = base ** exponent
    return result;
}

function squareRoot(number) {
    if (number < 0) {
        console.log("invalid input !");
    }
    return Math.sqrt(number);
}

function factorial(number) {
    if (number < 0) {
        console.log("Invalid input!");
    }
    let result = 1;
    for (let i = 1; i <= number; i++) {
        result = result * i;
    }
    return result;
}


function mainMenu() {
    const prompt = require('prompt-sync')();
    let numberOne;
    let numberTwo;
    let history = [];
    let result;
    
    while (true) {
        console.log("********************* Main menu *********************\n");

        console.log("1-  Addition (+)")
        console.log("2-  Subtraction (-)");
        console.log("3-  Multiplication(*)");
        console.log("4-  Division (/)");
        console.log("5-  Power");
        console.log("6-  Square root");
        console.log("7-  Factorial");
        console.log("8-  history");
        console.log("0-  Exit");

        let operation = prompt("choose an operations : ")

        if (operation == 0) {
            console.log("goodbay!")
            break;
        }
        switch (operation) {
            case "1":
                numberOne = Number(prompt("enter number : "));
                numberTwo = Number(prompt("enter number : "));
                result = addition(numberOne, numberTwo);
                console.log(`${numberOne} + ${numberTwo} =  ${result}`);
                history.push(`${numberOne} + ${numberTwo} =  ${result}`);
                break;
            case "2":
                numberOne = Number(prompt("enter number : "));
                numberTwo = Number(prompt("enter number : "));;
                result = subtraction(numberOne, numberTwo);
                console.log(`${numberOne} - ${numberTwo} =  ${result}`);
                history.push(`${numberOne} - ${numberTwo} =  ${result}`);
                break;
            case "3":
                numberOne = Number(prompt("enter number : "));
                numberTwo = Number(prompt("enter number : "));
                result = multiplication(numberOne, numberTwo);
                console.log(`${numberOne} x ${numberTwo} =  ${result}`);
                history.push(`${numberOne} x ${numberTwo} =  ${result}`);
                break;
            case "4":
                numberOne = Number(prompt("enter number : "));
                numberTwo = Number(prompt("enter number : "));
                result = division(numberOne, numberTwo);
                console.log(`${numberOne} / ${numberTwo} =  ${result}`);
                history.push(`${numberOne} / ${numberTwo} =  ${result}`);
                break;
            case "5":
                let base = Number(prompt("enter base number : "));
                let exponent = Number(prompt("enter exponent number : "));
                result = power(base, exponent);
                console.log(`${numberOne} ^ ${numberTwo} =  ${result}`);
                history.push(`${numberOne} ^ ${numberTwo} =  ${result}`);
                break;
            case "6":
                numberOne = Number(prompt("enter number : "));
                result = squareRoot(numberOne);
                console.log(`${numberOne} =  ${result}`);
                history.push(`${numberOne} =  ${result}`);
                break;
            case "7":
                numberOne = Number(prompt("enter base number : "));
                result = factorial(numberOne);
                console.log(`${numberOne}! =  ${result}`);
                break;
            case "8":
                if(history.length === 0){
                    console.log("the history is empty");
                }else{
                    console.log("================= history =================\n")
                    history.forEach((res, index)=>{console.log(`${index + 1}. ${res}`);});
                    console.log(`${history}`);
                }
                break;
            default :
                console.log("invalide input !"); 
                
        }

    }
}
mainMenu();