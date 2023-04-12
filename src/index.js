import { Todo } from "./todo.js";
import { updateProjects, updateTodos, expandTodo } from "./dom.js";
import { addProject, addTodoToProject } from "./app.js";
import "./controller.js"


const todo1 = new Todo(
  "Finish project",
  "Complete the assignment",
  "2023-04-01",
  "medium"
);
addTodoToProject(0, todo1);
addTodoToProject(0, todo1);
addTodoToProject(0, todo1);

addProject("Shopping List");
const todo2 = new Todo(
  "Buy groceries",
  "Get eggs, bread, and milk",
  "2023-04-03",
  "medium"
);
addTodoToProject(1, todo2);

updateProjects();
updateTodos(0);
expandTodo(0, 0);

