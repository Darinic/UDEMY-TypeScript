"use strict";
const btn = document.getElementById("btn");
const input = document.getElementById("todoinput"); // HTMLInputElement has value parameter. So we can use it.
const form = document.querySelector("form");
const list = document.getElementById("todolist");
function readTodos() {
    const todosJSON = localStorage.getItem("todos");
    if (todosJSON === null) {
        return [];
    }
    else {
        return JSON.parse(todosJSON);
    }
}
;
const todos = readTodos();
todos.forEach(createTodo);
function handleSubmit(e) {
    e.preventDefault();
    const newTodo = {
        text: input.value,
        completed: false
    };
    createTodo(newTodo);
    todos.push(newTodo);
    saveTodos();
    input.value = "";
}
;
function saveTodos() {
    localStorage.setItem("todos", JSON.stringify(todos));
}
;
function createTodo(todo) {
    const newLI = document.createElement("li");
    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.checked = todo.completed;
    checkbox.addEventListener("change", function () {
        todo.completed = checkbox.checked;
        saveTodos();
    });
    newLI.append(todo.text);
    newLI.append(checkbox);
    list === null || list === void 0 ? void 0 : list.append(newLI);
}
form.addEventListener("submit", handleSubmit);