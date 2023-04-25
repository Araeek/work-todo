import { projects } from "./app";

function updateProjects() {
  const projectListDiv = document.querySelector("#project-list");
  projectListDiv.innerHTML = "";
  for (let i = 0; i < projects.length; i++) {
    const projectDiv = document.createElement("div");
    projectDiv.classList.add("project");
    projectDiv.dataset.projectIndex = `${i}`;
    projectDiv.innerHTML = `
          <h3>${projects[i].name}</h3>
          <div class="project-actions">
            <button class="project-btn" data-project-index="${i}">
              <i class="fas fa-edit edit"></i> 
            </button>
            <button class="project-btn" data-project-index="${i}">
              <i class="fas fa-trash-alt delete"></i>
            </button>
          </div>
        `;
    projectListDiv.appendChild(projectDiv);
  }
}

function updateTodos(projectIndexNumber) {
  const todoListDiv = document.querySelector(".todo-container");
  const projectTitle = document.querySelector("#project-title");
  projectTitle.textContent = `${projects[projectIndexNumber].name}`;
  document.querySelector(".project-title-section").dataset.projectIndex = `${projectIndexNumber}`;
  document.querySelector(".edit-project-btn").dataset.projectIndex = `${projectIndexNumber}`;
  document.querySelector(".todo-container").dataset.projectIndex = `${projectIndexNumber}`;
  todoListDiv.innerHTML = "";
  for (let i = 0; i < projects[projectIndexNumber].todos.length; i++) {
    const todoDiv = document.createElement("div");
    todoDiv.classList.add("todo");
    todoDiv.dataset.todoIndex = i;
    todoDiv.innerHTML = `
          <h3>${projects[projectIndexNumber].todos[i].title}</h3>
          <p>
            <input type="date" id="date" name="date" value=${
              projects[projectIndexNumber].todos[i].dueDate
            }>
          </p>
          <div class="todo-priority">
            <select class="priority-select">
              <option value="high" ${
                projects[projectIndexNumber].todos[i].priority === "high"
                  ? "selected"
                  : ""
              }>high
              </option>
              <option value="medium" ${
                projects[projectIndexNumber].todos[i].priority === "medium"
                  ? "selected"
                  : ""
              }>medium
              </option>
              <option value="low" ${
                projects[projectIndexNumber].todos[i].priority === "low"
                  ? "selected"
                  : ""
              }>low
              </option>
            </select>
            
          </div>
          <div class="todo-actions">
            <label class="complete-checkbox">
              <span class="complete-label-text">Complete</span>
              <input class=todo-complete type="checkbox" name="checkbox" ${projects[projectIndexNumber].todos[i].complete ? "checked" : ""}>
              <span class="complete-todo-btn"></span>
            </label>
            <button class="edit-todo-btn">
              <i class="fas fa-edit"></i> 
            </button>
            <button class="project-btn">
              <i class="fas fa-trash-alt delete-todo"></i>
            </button>
          </div>
        `;
    todoListDiv.appendChild(todoDiv);
  }
}

function expandTodo(projectIndex, todoIndex) {
  // const todo = projects[projectIndex].todos[todoIndex];
  // todoDetailsDiv.innerHTML = `
  //       <h3>${todo.title}</h3>
  //       <p>${todo.description}</p>
  //       <p>Due Date: ${todo.dueDate}</p>
  //       <p>Priority: ${todo.priority}</p>
  //       <button class="edit-todo-btn" data-project-index="${projectIndex}" data-todo-index="${todoIndex}">Edit</button>
  //     `;
}

const todoFormPrioirity = document.querySelector(".todo-form-select");
todoFormPrioirity.addEventListener("change", function(){
  switch (this.value) {
    case "high":
      this.classList.remove("medium");
      this.classList.remove("low");
      this.classList.add("high");
      break;
    case "medium":
      this.classList.add("medium");
      this.classList.remove("low");
      this.classList.remove("high");
      break;
    case "low":
      this.classList.remove("medium");
      this.classList.add("low");
      this.classList.remove("high");
      break;
  }
})

export { updateProjects, updateTodos, expandTodo };
