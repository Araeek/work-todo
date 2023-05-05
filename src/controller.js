import {
  addTodoToProject,
  changeTodoPriority,
  completeTodo,
  projects,
  removeTodoFromProject,
  changeTodoDueDate,
  changeTodoName,
  saveToStorage,
} from "./app";
import { updateProjects, updateTodos } from "./dom";
import { addProject, removeProject, editProjectName } from "./app";
import { Todo } from "./todo";

const projectAddModal = document.getElementById("project-add");
const projectEditModal = document.getElementById("project-edit");
const projectAddBtn = document.getElementById("project-add-btn");
const closeSpan = document.querySelectorAll(".close-span");
const projectAddForm = document.querySelector("#project-add-form");
const projectEditForm = document.querySelector("#project-edit-form");
const projectList = document.querySelector("#project-list");
const editHeader = document.querySelector(".edit-project-btn");
const addTodoBtn = document.querySelector(".add-todo-btn");
const todoAddModal = document.querySelector("#todo-add");
const todoAddForm = document.querySelector("#todo-add-form");
const todoContainer = document.querySelector(".todo-container");

projectAddBtn.onclick = function () {
  projectAddModal.classList.add("show");
};

closeSpan.forEach((span) => {
  span.addEventListener("click", function () {
    projectAddModal.classList.remove("show");
    projectEditModal.classList.remove("show");
    todoAddModal.classList.remove("show");
  });
});

window.onclick = function (event) {
  if (
    event.target == projectAddModal ||
    event.target == projectEditModal ||
    event.target == todoAddModal
  ) {
    projectAddModal.classList.remove("show");
    projectEditModal.classList.remove("show");
    todoAddModal.classList.remove("show");
  }
};

projectAddForm.addEventListener("submit", function (event) {
  event.preventDefault();
  projectAddModal.classList.remove("show");
  addProject(document.querySelector("#project-name").value);
  updateProjects();
  saveToStorage();
});

projectList.addEventListener("click", function (e) {
  if (e.target.classList.contains("delete")) {
    removeProject(e.target.parentNode.getAttribute("data-project-index"));
    updateProjects();
    saveToStorage();
  }
  if (e.target.classList.contains("edit")) {
    editProject(e);
    return;
  }
  if (e.target.classList.contains("project")) {
    updateTodos(e.target.getAttribute("data-project-index"));
  } else {
    updateTodos(e.target.parentNode.getAttribute("data-project-index"));
  }
});

editHeader.addEventListener("click", function (e) {
  editProject(e);
});

addTodoBtn.addEventListener("click", function () {
  todoAddModal.classList.add("show");
});

function editProject(e) {
  projectEditModal.classList.add("show");
  document.querySelector("#project-edit-name").value = `${
    projects[e.target.parentNode.getAttribute("data-project-index")].name
  }`;
  projectEditForm.addEventListener("submit", function _listener(event) {
    event.preventDefault();
    projectEditModal.classList.remove("show");
    editProjectName(
      e.target.parentNode.getAttribute("data-project-index"),
      document.querySelector("#project-edit-name").value
    );
    updateProjects();
    updateTodos(e.target.parentNode.getAttribute("data-project-index"));
    projectEditForm.removeEventListener("submit", _listener);
  });
  saveToStorage();
}

todoAddForm.addEventListener("submit", function (e) {
  e.preventDefault();
  todoAddModal.classList.remove("show");
  const formData = new FormData(todoAddForm);
  const values = Object.fromEntries(formData.entries());
  const todo = new Todo(
    values["title"],
    values["due-date"],
    values["priority"],
    values["complete"]
  );
  addTodoToProject(
    document.querySelector(".todo-container").dataset.projectIndex,
    todo
  );
  updateTodos(document.querySelector(".todo-container").dataset.projectIndex);
  saveToStorage();
});

todoContainer.addEventListener("click", function (e) {
  if (e.target.classList.contains("delete-todo")) {
    const projectIndexToRemove =
      document.querySelector(".todo-container").dataset.projectIndex;
    const todoIndexToRemove =
      e.target.parentNode.parentNode.parentNode.dataset.todoIndex;
    removeTodoFromProject(projectIndexToRemove, todoIndexToRemove);
    updateTodos(projectIndexToRemove);
    saveToStorage();
  }

  if (e.target.classList.contains("edit-todo")) {
    console.log();
    const todoTitle =
      e.target.parentNode.parentNode.parentNode.querySelector(".todo-title");
    const inputEl = document.createElement("input");
    inputEl.classList.add("todo-title");
    inputEl.value = todoTitle.textContent;
    todoTitle.replaceWith(inputEl);
    inputEl.focus();
    inputEl.addEventListener("keydown", (ev) => {
      if (ev.key === "Enter") {
        const projectIndexToEdit =
          document.querySelector(".todo-container").dataset.projectIndex;
        const todoIndexToEdit =
          e.target.parentNode.parentNode.parentNode.dataset.todoIndex;
        changeTodoName(projectIndexToEdit, todoIndexToEdit, inputEl.value);
        const newTitle = document.createElement("h3");
        newTitle.textContent = inputEl.value;
        inputEl.replaceWith(newTitle);
        updateTodos(projectIndexToEdit);
        saveToStorage();
      }
    });
  }
});

todoContainer.addEventListener("change", function (e) {
  const projectIndex =
    document.querySelector(".todo-container").dataset.projectIndex;
  if (e.target.classList.contains("todo-complete")) {
    const todoIndexToComplete =
      e.target.parentNode.parentNode.parentNode.dataset.todoIndex;
    completeTodo(projectIndex, todoIndexToComplete, e.target.checked);
  }
  if (e.target.classList.contains("priority-select")) {
    const todoIndexToPriority =
      e.target.parentNode.parentNode.dataset.todoIndex;
    changeTodoPriority(projectIndex, todoIndexToPriority, e.target.value);
  }
  if (e.target.classList.contains("todo-date")) {
    const todoIndexToDate = e.target.parentNode.parentNode.dataset.todoIndex;
    changeTodoDueDate(projectIndex, todoIndexToDate, e.target.value);
  }
  updateTodos(projectIndex);
  saveToStorage();
});
