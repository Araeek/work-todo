import { projects } from "./app";
import { updateProjects, updateTodos } from "./dom";
import { addProject, removeProject, editProjectName } from "./app";

const projectAddModal = document.getElementById("projectAdd");
const projectEditModal = document.getElementById("projectEdit");
const projectAddBtn = document.getElementById("projectAddBtn");
const closeSpan = document.querySelectorAll(".close-span");
const projectAddForm = document.querySelector("#project-add-form");
const projectEditForm = document.querySelector("#project-edit-form");
const projectList = document.querySelector("#project-list");

projectAddBtn.onclick = function () {
  projectAddModal.classList.add("show");
};

closeSpan.forEach((span) => {
  span.addEventListener("click", function () {
    projectAddModal.classList.remove("show");
    projectEditModal.classList.remove("show");
  });
});

window.onclick = function (event) {
  if (event.target == projectAddModal || event.target == projectEditModal) {
    projectAddModal.classList.remove("show");
    projectEditModal.classList.remove("show");
  }
};

projectAddForm.addEventListener("submit", function (event) {
  event.preventDefault();
  projectAddModal.classList.remove("show");
  addProject(document.querySelector("#project-name").value);
  updateProjects();
});

projectList.addEventListener("click", function (e) {
  if (e.target.classList.contains("delete")) {
    removeProject(e.target.parentNode.getAttribute("data-project-index"));
    updateProjects();
  }
  if (e.target.classList.contains("edit")) {
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
      projectEditForm.removeEventListener("submit", _listener);
    });
  }
  if (e.target.classList.contains("project")) {
    updateTodos(e.target.getAttribute("data-project-index"));
  } else {
    updateTodos(e.target.parentNode.getAttribute("data-project-index"));
    console.log(e.target.parentNode.getAttribute("data-project-index"))
  }
});
