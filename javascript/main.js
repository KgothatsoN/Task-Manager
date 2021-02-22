const addBtn = document.querySelector(".add-btn");
const taskInput = document.querySelector(".task-input");
const taskList = document.querySelector(".task-list");

document.addEventListener("DOMContentLoaded", getTasks);
addBtn.addEventListener("click", addTask);
taskList.addEventListener("click", deleteTask);



// Add new task function
function addTask(e) {
    e.preventDefault();

    // Create div
    const taskDiv = document.createElement("div");
    taskDiv.classList.add("task");
    // Create list
    const newTask = document.createElement("li");
    newTask.innerText = taskInput.value;
    newTask.classList.add("task-item");
    // Add new task to div
    taskDiv.appendChild(newTask);

    // Add task to local storage
    saveTasks(taskInput.value);

    // Create check button
    const checkBtn = document.createElement("button");
    checkBtn.innerHTML = '<i class="far fa-check-square"></i>'
    checkBtn.classList.add("check-btn");
    // Add button to div
    taskDiv.appendChild(checkBtn);

    // Create delete button
    const deleteBtn = document.createElement("button");
    deleteBtn.innerHTML = '<i class="fas fa-eraser"></i>'
    deleteBtn.classList.add("delete-btn");
    // Add delete button to div
    taskDiv.appendChild(deleteBtn);

    // Add completed div to unordered list
    taskList.appendChild(taskDiv);

    // Clear Task Input
    taskInput.value = "";
}

// Delete or Complete Task function
function deleteTask (e) {
    e.preventDefault();

    // Delete task item
    const item = e.target;
    if (item.classList[0]=== 'delete-btn'){
        const task = item.parentElement; 
        // Delete element after transition 
        task.classList.add("fall");
        deleteStoredTask(task);
        task.addEventListener("transitionend", function()   {
            task.remove();
        });
    }
    
    // Check completed item and delete
    if (item.classList[0]=== 'check-btn'){
        const task = item.parentElement; 
        task.classList.toggle("completed");
    }
}

// Save tasks function
function saveTasks (task)    {
    let tasks;

    // Check if tasks exists
    // If null then create array
    if (localStorage.getItem("tasks" ) === null) {
        tasks = [];
    }
    else
    {
        tasks = JSON.parse(localStorage.getItem("tasks"));
    }

    // If array exists append new task to array
    tasks.push(task);
    localStorage.setItem("tasks", JSON.stringify(tasks));
}

// Delete task from local storage
function deleteStoredTask(task)   {
    let tasks;
    // Check if tasks exists
    // If null then create array
    if (localStorage.getItem("tasks" ) === null) {
        tasks = [];
    }
    else
    {
        tasks = JSON.parse(localStorage.getItem("tasks"));
    }

    const taskIndex = task.children[0].innerText;
    tasks.splice(tasks.indexOf(taskIndex), 1)

    localStorage.setItem("tasks", JSON.stringify(tasks));
}

