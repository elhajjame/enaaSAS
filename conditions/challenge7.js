const prompt = require('prompt-sync')();

let password = prompt("enter a password: ");
let number = /[0-9]/.test(password);
let char = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?`~]/.test(password);

if(password.length < 6)
{
    console.log("your password is weak");
}else if(password.length >= 6 && number )
{
    console.log("your password is medium");
}else if(password.length >= 8 && number && char)
{
    console.log("your password is strong");
}
else console.log("your password is weak")