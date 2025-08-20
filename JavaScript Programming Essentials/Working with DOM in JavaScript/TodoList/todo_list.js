const taskInput = document.getElementById("taskInput");
const addTaskButton = document.getElementById("addTaskBtn");
const taskList = document.getElementById("taskList");
const clearCompletedButton = document.getElementById("clearCompletedBtn");
const clearAllButton = document.getElementById("clearAllBtn");

let tasks = [];

function addTask() {
    const taskText = taskInput.value.trim();
    debugger;
    if (taskInput !== "") {
        tasks.push({ text: taskText });
        taskInput.value = "";
        displayTasks();
    }
}

function displayTasks() {
    taskList.innerHTML = "";
    tasks.forEach((task, index) => {
        const li = document.createElement("li");
        li.innerHTML = `<input type="checkbox" id="task-${index}" ${task.completed ? "checked" : ""}/>
            <label for="task-${index}">${task.text}</label>`;
            const checkbox = li.querySelector("input");
            checkbox.addEventListener("change", () => toggleTask(index));
        taskList.appendChild(li);
    });
}

function toggleTask(index) {
    tasks[index].completed = !tasks[index].completed;
    displayTasks();
}

function clearCompletedTasks() {
    tasks = tasks.filter(task => !task.completed);
    displayTasks();
}

function clearAllTasks(){
    tasks = [];
    displayTasks();
}

addTaskButton.addEventListener("click", addTask);
clearCompletedButton.addEventListener("click", clearCompletedTasks);
clearAllButton.addEventListener("click", clearAllTasks);