import { Todo } from "./todo.js";
import { updateProjects, updateTodos, expandTodo } from "./dom.js";
import { addProject, projects } from "./app.js";
import "./controller.js";

// const todo1 = new Todo(
//   "Finish project",
//   "2023-04-01",
//   "medium",
//   true
// );
// addTodoToProject(0, todo1);
// addTodoToProject(0, todo1);
// addTodoToProject(0, todo1);

// addProject("Shopping List");
// const todo2 = new Todo(
//   "Buy groceries",
//   "2023-04-03",
//   "medium",
//   true
// );
// addTodoToProject(1, todo2);
if (projects.length === 0) {
  addProject("Default Project");
}

updateProjects();
updateTodos(0);
