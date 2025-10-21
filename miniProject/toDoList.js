const prompt = require('prompt-sync')();
let task = [];

function add (){

    let taskSize = prompt("how many task you want to add? ")
for(let i = 0; i < taskSize; i++){
    let taskName = prompt(`enter the task name No ${i+1}: `);
    let taskDescription = prompt(`enter the task description No ${i+1}: `);    

    const objTask ={
    id : task.length + 1,
    name : taskName,
    description : taskDescription,
    status: false, }  
         
    task.push(objTask);
    }
}

function display (){
    if(task == 0){
        console.log("================================================================\n")
        console.log("still no task added yet!\n");
        console.log("================================================================\n")
    }
for(let i = 0; i < task.length; i++){
   dis = task [i] 

   console.log(dis)
}
}

function search (){
    console.log("================================================================\n");
        let taskSearch = Number(prompt("search on task by id: "));
    console.log("================================================================\n");

    let found = false;
    for(let i = 0; i <  task.length; i++){
        if(taskSearch == task[i].id){
        console.log("================================================================\n");
            console.log(task[i]);
        console.log("================================================================\n");
        
            found = true;
            break;
        }
    }
    if (!found) {
    console.log("Task with this id not found!");
    }
}

function update (){
    let uptask = prompt("enter the id of the task: ");
    let found = false;

    for(let i = 0; i < task.length; i++){
        if(uptask == task[i].id){
            console.log(`** ${task[i]} description : ${task[i].description}`);

        let newTask = prompt("the new task: ");
        task[i].name = newTask;

        let newDescription = prompt("the new description: ");
        task[i].description = newDescription;
        
        console.log("task updated successfully!");

        found = true;
        break;
        }
        if (!found) {
            console.log("The task was not found!");}
    }

}

function complatePending  (){
    const id = Number(prompt("enter trhe id: "));
    let result=task.find((item)=> item.id == id)
    if(result){
        result.status = !result.status;    
    }
}

function Delete(){

    if(task.length == 0){
        console.log("the task list still empty");
        return;
    }

    let del = Number(prompt("enter the id task that you want to delete: "));
    let found = false;

    for(let i = 0; i < task.length; i++){
        if(del == task[i].id){
            task.splice(i, 1);
              console.log("Task deleted successfully!");
            found = true;
            break;  
        }
    } if(!found) console.log("the task not found!");

}

while(true){
       console.log("********************* Main menu *********************\n");

        console.log("1-  Dispaly all tasks ")
        console.log("2-  Add a task ");
        console.log("3-  Search on task");
        console.log("4-  Edit a task ");
        console.log("5-  delete a task ");
        console.log("6-  Display complated / pending tasks");
        console.log("0-  Exit");

        let userInput = prompt("choose from the menu : ");

        if(userInput == 0){
            console.log("do you want to quite y/n: ");
            const quite = prompt("")
                if(quite == "y"){
                    console.log("goodbye!")
                    break;
                }else continue;
        }

        switch(userInput){

            case "1":
                display();
                    break;

            case "2":
                add();
                    break;
                
            case "3":
                search ();
                    break;
                
            case "4":
                update ();
                    break;     
                
            case "5":               
                Delete ();
                    break;
            case "6":
                complatePending()
                    break;                                                  
        }
    }