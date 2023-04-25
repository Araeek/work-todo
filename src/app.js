import { Project } from "./project.js";
import { defaultProject } from "./defaultProject.js";

const projects = [defaultProject];

function addProject(name) {
  const project = new Project(name);
  projects.push(project);
}

function removeProject(index) {
  projects.splice(index, 1);
}

function editProjectName(index, newName) {
  projects[index].name = newName;
}

function addTodoToProject(projectIndex, todo) {
  projects[projectIndex].todos.push(todo);
}

function completeTodo(projectIndex, todoIndex, value) {
  projects[projectIndex].todos[todoIndex].complete = value;
}

function changeTodoPriority(projectIndex, todoIndex, priority) {
  projects[projectIndex].todos[todoIndex].priority = priority;
}

function removeTodoFromProject(projectIndex, todoIndex) {
  projects[projectIndex].todos.splice(todoIndex, 1);
}

export {
  addProject,
  removeProject,
  editProjectName,
  addTodoToProject,
  completeTodo,
  changeTodoPriority,
  removeTodoFromProject,
  projects,
};
