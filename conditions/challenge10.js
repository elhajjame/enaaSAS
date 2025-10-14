const prompt = require ('prompt-sync')();

console.log("login page")
console.log("\n");

let username = prompt("entre the username:  ");
console.log("\n")
let password = prompt("entre the password:  ");

if(username == 'admin' && password == 1234)
{
    console.log("welcome admin");
}else if(username != 'admin' && password == 1234)
{
    console.log("Incorrect username");
}else if(username == 'admin' && password != 1234)
{
    console.log("Incorrect password");
}else console.log("user not found");