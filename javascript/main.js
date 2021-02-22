const addBtn = document.querySelector(".add-btn");
const taskInput = document.querySelector(".task-input");
const taskList = document.querySelector(".task-list");

addBtn.addEventListener("click", addTask);


function addTask(e) {
    e.preventDefault();

    // Create div
    const taskDiv = document.createElement("div");
    taskDiv.classList.add("task");
    // Create list
    const newTask = document.createElement("li");
    // newTask.innerText = "hi";
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
    deleteBtn.classList.add("trash-btn");
    // Add delete button to div
    taskDiv.appendChild(deleteBtn);

    // Add completed div to unordered list
    taskList.appendChild(taskDiv);

}