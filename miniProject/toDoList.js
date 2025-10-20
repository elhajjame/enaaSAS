const prompt = require('prompt-sync')();
//let taskName = [];
let task = [];
let discription = [];
let pending = [];
let complait = [];

function display(){
    console.log("================================== Task list ==================================\n")
    if(task != 0){
        for(let i = 0; i < task.length; i++){
            console.log(`task : ${task[i]}`)
        }
    }else console.log("there's no task!");

}

function add(){
    let taskSize = Number(prompt("how many taske do you want to add? "))
    
    for(let i = 0; i < taskSize; i++){
    console.log(`================================== Add task ${i+1}  ==================================\n`)        
    let taskTitle = prompt("enter the task title : ");
    task.push(taskTitle);
    let taskDiscription = prompt("enter the discription of the task : ");
    taskDiscription.push(discription);
    }
}

function search(){
    let taskSearch = prompt("enter the name of the task: ");

    for(let i = 0; i < taskName.length; i++){
        if(taskSearch == taskName[i]){
            console.log(`task ${taskName[i]}`)
        }
    }
}

function edit(){
    let taskEdit = prompt("search on task: ");
    found = false;

    for(let i = 0; i < task.length; i++){
    if(taskEdit == task){
        console.log(`task title : ${task[i]}`)
        }

        let newTask = prompt("enter the new task: ");

        newTask = task[i]
        break;
    }    
        console.log(task)
}

function markTask(){

}

function completed_pending(){

}

while(true){
    console.log("1. Display tasks");
    console.log("2. Add a task");
    console.log("3. Search for a task");
    console.log("4. Edit a task");
    console.log("5. Delete a task");
    console.log("6. Mark a task as completed");
    console.log("7. Show completed / pending tasks");
    console.log("0. Exit")

    let menuInput = Number(prompt("choose a number : "));

    switch(menuInput){
        case 1 : 
            display()
                break;

        case 2 :
            add();
                break;
        
        case 3 :
            search();            
                 break;
        
        case 4 :
            edit();
                break;    

        case 5 :
            Delete();
                break;    

        case 6 :
            completed();
                break;    
         
        case 7 :
            completed_pending
                break;
        default : 
        console.log("goodbye!")            
                break;         
    }
}