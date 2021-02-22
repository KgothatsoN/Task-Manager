const addBtn = document.querySelector(".add-btn");
const taskInput = document.querySelector(".task-input");
const taskList = document.querySelector(".task-list");

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
        task.remove();
    }
    
    // Check completed item and delete
    if (item.classList[0]=== 'check-btn'){
        const task = item.parentElement; 
        task.classList.toggle("completed");
    }
}