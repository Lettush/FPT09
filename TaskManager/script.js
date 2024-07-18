/* 
    1. Accessing / DOM Targetting
    2. Handling Events
    3. Creating the Functionality
*/

// Step 1
const todoInput = document.querySelector(".todo-input");
const todoButton = document.querySelector(".todo-button");
const filterTodo = document.querySelector(".filter-todo");
const todoList = document.querySelector(".todo-list");

// Step 2
todoButton.addEventListener("click", addTodo);
todoList.addEventListener("click", deleteOrCompleteTodo);
filterTodo.addEventListener("change", filterTodos);

// Step 3

/* 
    1. Create
    2. Give Classes, Text and Styling
    3. Append to an existing element
*/

function addTodo(e) {
    // stop the page from refreshing
    e.preventDefault();
    
    // create an element
    const todoDiv = document.createElement("div");
    todoDiv.classList.add("todo");

    // add task/todo name to the div
    const newTodo = document.createElement("li");
    newTodo.innerText = todoInput.value;
    newTodo.classList.add("todo-item");

    // create complete button
    const completeButton = document.createElement("button");
    completeButton.innerHTML = "<i class='fas fa-check'></i>";
    completeButton.classList.add("complete-btn");

    // create trash button
    const trashButton = document.createElement("button");
    trashButton.innerHTML = "<i class='fas fa-trash'></i>";
    trashButton.classList.add("trash-btn");

    // appending
    todoDiv.appendChild(newTodo);
    todoDiv.appendChild(completeButton);
    todoDiv.appendChild(trashButton);
    todoList.appendChild(todoDiv);

    // clearing the todoInput after submission
    todoInput.value = "";
}

function deleteOrCompleteTodo(e) {
    const item = e.target;

    if (item.classList.contains("trash-btn")) {
        const todo = item.parentElement;
        todo.classList.add("fall");
        
        // "transitionend"
        todo.addEventListener("transitionend", function() {
            todo.remove();
        })
    }

    if (item.classList.contains("complete-btn")) {
        const todo = item.parentElement;
        // add if not existing, remove if existing
        todo.classList.toggle("completed");
    }
}

function filterTodos(e) {
    const todos = todoList.childNodes;
    
    todos.forEach(function (todo) {
        switch (e.target.value) {
            case "all":
                todo.style.display = "flex";
                break;
            case "completed":
                if (todo.classList.contains("completed")) {
                    todo.style.display = "flex";
                } else {
                    todo.style.display = "none";
                }
                break;
            case "uncompleted":
                if (!todo.classList.contains("completed")) {
                    todo.style.display = "flex";
                } else {
                    todo.style.display = "none";
                }
        }
    })
}