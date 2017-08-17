var tasks = document.getElementById("tasks");
var addTaskText = document.getElementById("adderTask").getElementsByTagName("input")[0];
var addTask = document.getElementById("addTask");
tasks.addEventListener("click",function (e) {
    var target = e.target;
    var action = target.getAttribute("data-action");
    var task = target.parentNode.parentNode;
    var taskInput = task.querySelector("input[type ='text']")
    var taskText= task.querySelector("label");
    switch(action) {
        case "change": 
            change(target,taskInput,taskText);
            break;            
        case "save": 
            save(target,taskInput,taskText);
            break;            
        case "del":
            del(target,task);
            break;    
    }   
})

function change(target,taskInput,taskText) {
    target.nextElementSibling.style.display = "inline-block";
    target.style.display = "none";
    taskInput.style.display = "inline-block";
    taskText.style.display = "none";
}
function save(target,taskInput,taskText) {
    target.previousElementSibling.style.display = "inline-block";
    target.style.display = "none";
    taskText.innerHTML = taskInput.value;    
    taskInput.style.display = "none";
    taskText.style.display = "inline-block";
}

addTask.addEventListener("click",function(e) {
    if(addTaskText.value == "") {
        writeError();
        return;
    }
    var newTask = document.createElement("div");
    newTask.className = "task";
    newTask.innerHTML = createTask(addTaskText.value);
    tasks.appendChild(newTask);
    addTaskText.value = "";

    
})
function createTask(text) {
    return (        
        `
                <div class="taskMain">                    
                    <input id ="t1i" type="checkbox"><label for="t1i">${text}</label>
                    <input type="text" value=${text}>
                                        
                </div>
                <div class="taskOptions">
                    <div data-action = "change" class="changerTask tOps">change</div>
                    <div data-action = "save" class="saverTask tOps">save</div>
                    <div data-action = "del" class="deleterTask tOps">delete</div>
                </div>
                <div class="clear"></div>
        `)
}

function writeError() {
    alert("Please, write text")
}

function del(target,task) {
    tasks.removeChild(task)
}


