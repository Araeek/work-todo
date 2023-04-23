(()=>{"use strict";function t(t,e,o,n){this.title=t,this.dueDate=e,this.priority=o,this.complete=n}function e(t){this.name=t,this.todos=[]}const o=[new e("Default")];function n(t){const n=new e(t);o.push(n)}function s(t,e){o[t].todos.push(e)}function i(){const t=document.querySelector("#project-list");t.innerHTML="";for(let e=0;e<o.length;e++){const n=document.createElement("div");n.classList.add("project"),n.dataset.projectIndex=`${e}`,n.innerHTML=`\n          <h3>${o[e].name}</h3>\n          <div class="project-actions">\n            <button class="project-btn" data-project-index="${e}">\n              <i class="fas fa-edit edit"></i> \n            </button>\n            <button class="project-btn" data-project-index="${e}">\n              <i class="fas fa-trash-alt delete"></i>\n            </button>\n          </div>\n        `,t.appendChild(n)}}function c(t){const e=document.querySelector(".todo-container");document.querySelector("#project-title").textContent=`${o[t].name}`,document.querySelector(".project-title-section").dataset.projectIndex=`${t}`,e.innerHTML="";for(let n=0;n<o[t].todos.length;n++){const s=document.createElement("div");s.classList.add("todo"),s.innerHTML=`\n          <h3>${o[t].todos[n].title}</h3>\n          <p>\n            <input type="date" id="date" name="date" value=${o[t].todos[n].dueDate}>\n          </p>\n          <div class="todo-priority">\n            <select class="priority-select">\n              <option value="high" ${"high"===o[t].todos[n].priority?"selected":""}>\n              <div class="priority-circle priority-high"></div>\n              <p class="priority-text-high">high</p>\n              </option>\n              <option value="medium" ${"medium"===o[t].todos[n].priority?"selected":""}>\n              <div class="priority-medium"></div>\n              <p class="priority-text-medium">medium</p>\n              </option>\n              <option value="low" ${"low"===o[t].todos[n].priority?"selected":""}>\n              <div class="priority-circle priority-low"></div>\n              <p class="priority-text-low">low</p>\n              </option>\n            </select>\n            \n          </div>\n          <div class="todo-actions">\n            <label class="complete-checkbox">\n              <span class="complete-label-text">Complete</span>\n              <input type="checkbox" name="checkbox" ${o[t].todos[n].complete?"checked":""}>\n              <span class="complete-todo-btn"></span>\n            </label>\n            <button class="edit-todo-btn" data-project-index="${t}">\n              <i class="fas fa-edit"></i> \n            </button>\n            <button class="project-btn" data-project-index="${t}">\n              <i class="fas fa-trash-alt"></i>\n            </button>\n          </div>\n        `,e.appendChild(s)}}document.querySelector(".todo-form-select").addEventListener("change",(function(){switch(this.value){case"high":this.classList.remove("medium"),this.classList.remove("low"),this.classList.add("high");break;case"medium":this.classList.add("medium"),this.classList.remove("low"),this.classList.remove("high");break;case"low":this.classList.remove("medium"),this.classList.add("low"),this.classList.remove("high")}}));const a=document.getElementById("project-add"),r=document.getElementById("project-edit"),d=document.getElementById("project-add-btn"),l=document.querySelectorAll(".close-span"),u=document.querySelector("#project-add-form"),p=document.querySelector("#project-edit-form"),m=document.querySelector("#project-list"),h=document.querySelector(".edit-project-btn"),v=document.querySelector(".add-todo-btn"),L=document.querySelector("#todo-add"),y=document.querySelector("#todo-add-form");function f(t){r.classList.add("show"),document.querySelector("#project-edit-name").value=`${o[t.target.parentNode.parentNode.getAttribute("data-project-index")].name}`,p.addEventListener("submit",(function e(n){var s,a;n.preventDefault(),r.classList.remove("show"),s=t.target.parentNode.parentNode.getAttribute("data-project-index"),a=document.querySelector("#project-edit-name").value,o[s].name=a,i(),c(t.target.parentNode.parentNode.getAttribute("data-project-index")),p.removeEventListener("submit",e)}))}d.onclick=function(){a.classList.add("show")},l.forEach((t=>{t.addEventListener("click",(function(){a.classList.remove("show"),r.classList.remove("show"),L.classList.remove("show")}))})),window.onclick=function(t){t.target!=a&&t.target!=r&&t.target!=L||(a.classList.remove("show"),r.classList.remove("show"),L.classList.remove("show"))},u.addEventListener("submit",(function(t){t.preventDefault(),a.classList.remove("show"),n(document.querySelector("#project-name").value),i()})),m.addEventListener("click",(function(t){var e;t.target.classList.contains("delete")&&(e=t.target.parentNode.getAttribute("data-project-index"),o.splice(e,1),i()),t.target.classList.contains("edit")?f(t):t.target.classList.contains("project")?c(t.target.getAttribute("data-project-index")):c(t.target.parentNode.getAttribute("data-project-index"))})),h.addEventListener("click",(function(t){f(t)})),v.addEventListener("click",(function(){L.classList.add("show")})),y.addEventListener("submit",(function(e){e.preventDefault(),L.classList.remove("show");const o=new FormData(y),n=Object.fromEntries(o.entries()),i=new t(n.title,n["due-date"],n.priority,n.complete);s(document.querySelector(".project-title-section").dataset.projectIndex,i),c(document.querySelector(".project-title-section").dataset.projectIndex)}));const j=new t("Finish project","2023-04-01","medium",!0);s(0,j),s(0,j),s(0,j),n("Shopping List"),s(1,new t("Buy groceries","2023-04-03","medium",!0)),i(),c(0)})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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aUIsRUFBRzRELEdBQ3BCNUQsRUFBaUIsRUFBRzRELEdBRXBCL0QsRUFBVyxpQkFPWEcsRUFBaUIsRUFOSCxJQUFJYixFQUNoQixnQkFDQSxhQUNBLFVBQ0EsSUFJRmdCLElBQ0FhLEVBQVksRSIsInNvdXJjZXMiOlsid2VicGFjazovL3RvLWRvLWxpc3QvLi9zcmMvdG9kby5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vc3JjL3Byb2plY3QuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL3NyYy9kZWZhdWx0UHJvamVjdC5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vc3JjL2FwcC5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vc3JjL2RvbS5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vc3JjL2NvbnRyb2xsZXIuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJmdW5jdGlvbiBUb2RvKHRpdGxlLCBkdWVEYXRlLCBwcmlvcml0eSwgY29tcGxldGUpIHtcclxuICB0aGlzLnRpdGxlID0gdGl0bGU7XHJcbiAgdGhpcy5kdWVEYXRlID0gZHVlRGF0ZTtcclxuICB0aGlzLnByaW9yaXR5ID0gcHJpb3JpdHk7XHJcbiAgdGhpcy5jb21wbGV0ZSA9IGNvbXBsZXRlO1xyXG59XHJcblxyXG5leHBvcnQgeyBUb2RvIH07XHJcbiIsImZ1bmN0aW9uIFByb2plY3QobmFtZSkge1xyXG4gIHRoaXMubmFtZSA9IG5hbWU7XHJcbiAgdGhpcy50b2RvcyA9IFtdO1xyXG59XHJcblxyXG5leHBvcnQgeyBQcm9qZWN0IH07XHJcbiIsImltcG9ydCB7IFByb2plY3QgfSBmcm9tICcuL3Byb2plY3QuanMnO1xyXG5cclxuY29uc3QgZGVmYXVsdFByb2plY3QgPSBuZXcgUHJvamVjdChcIkRlZmF1bHRcIik7XHJcblxyXG5leHBvcnQgeyBkZWZhdWx0UHJvamVjdCB9O1xyXG4iLCJpbXBvcnQgeyBQcm9qZWN0IH0gZnJvbSBcIi4vcHJvamVjdC5qc1wiO1xyXG5pbXBvcnQgeyBkZWZhdWx0UHJvamVjdCB9IGZyb20gXCIuL2RlZmF1bHRQcm9qZWN0LmpzXCI7XHJcblxyXG5jb25zdCBwcm9qZWN0cyA9IFtkZWZhdWx0UHJvamVjdF07XHJcblxyXG5mdW5jdGlvbiBhZGRQcm9qZWN0KG5hbWUpIHtcclxuICBjb25zdCBwcm9qZWN0ID0gbmV3IFByb2plY3QobmFtZSk7XHJcbiAgcHJvamVjdHMucHVzaChwcm9qZWN0KTtcclxufVxyXG5cclxuZnVuY3Rpb24gcmVtb3ZlUHJvamVjdChpbmRleCkge1xyXG4gIHByb2plY3RzLnNwbGljZShpbmRleCwgMSk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGVkaXRQcm9qZWN0TmFtZShpbmRleCwgbmV3TmFtZSkge1xyXG4gIHByb2plY3RzW2luZGV4XS5uYW1lID0gbmV3TmFtZTtcclxufVxyXG5cclxuZnVuY3Rpb24gYWRkVG9kb1RvUHJvamVjdChwcm9qZWN0SW5kZXgsIHRvZG8pIHtcclxuICBwcm9qZWN0c1twcm9qZWN0SW5kZXhdLnRvZG9zLnB1c2godG9kbyk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGNvbXBsZXRlVG9kbyhwcm9qZWN0SW5kZXgsIHRvZG9JbmRleCkge1xyXG4gIHByb2plY3RzW3Byb2plY3RJbmRleF0udG9kb3NbdG9kb0luZGV4XS5jb21wbGV0ZWQgPSB0cnVlO1xyXG59XHJcblxyXG5mdW5jdGlvbiBjaGFuZ2VUb2RvUHJpb3JpdHkocHJvamVjdEluZGV4LCB0b2RvSW5kZXgsIHByaW9yaXR5KSB7XHJcbiAgcHJvamVjdHNbcHJvamVjdEluZGV4XS50b2Rvc1t0b2RvSW5kZXhdLnByaW9yaXR5ID0gcHJpb3JpdHk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHJlbW92ZVRvZG9Gcm9tUHJvamVjdChwcm9qZWN0SW5kZXgsIHRvZG9JbmRleCkge1xyXG4gIHByb2plY3RzW3Byb2plY3RJbmRleF0udG9kb3Muc3BsaWNlKHRvZG9JbmRleCwgMSk7XHJcbn1cclxuXHJcbmV4cG9ydCB7XHJcbiAgYWRkUHJvamVjdCxcclxuICByZW1vdmVQcm9qZWN0LFxyXG4gIGVkaXRQcm9qZWN0TmFtZSxcclxuICBhZGRUb2RvVG9Qcm9qZWN0LFxyXG4gIGNvbXBsZXRlVG9kbyxcclxuICBjaGFuZ2VUb2RvUHJpb3JpdHksXHJcbiAgcmVtb3ZlVG9kb0Zyb21Qcm9qZWN0LFxyXG4gIHByb2plY3RzLFxyXG59O1xyXG4iLCJpbXBvcnQgeyBwcm9qZWN0cyB9IGZyb20gXCIuL2FwcFwiO1xyXG5cclxuZnVuY3Rpb24gdXBkYXRlUHJvamVjdHMoKSB7XHJcbiAgY29uc3QgcHJvamVjdExpc3REaXYgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3Byb2plY3QtbGlzdFwiKTtcclxuICBwcm9qZWN0TGlzdERpdi5pbm5lckhUTUwgPSBcIlwiO1xyXG4gIGZvciAobGV0IGkgPSAwOyBpIDwgcHJvamVjdHMubGVuZ3RoOyBpKyspIHtcclxuICAgIGNvbnN0IHByb2plY3REaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgcHJvamVjdERpdi5jbGFzc0xpc3QuYWRkKFwicHJvamVjdFwiKTtcclxuICAgIHByb2plY3REaXYuZGF0YXNldC5wcm9qZWN0SW5kZXggPSBgJHtpfWA7XHJcbiAgICBwcm9qZWN0RGl2LmlubmVySFRNTCA9IGBcclxuICAgICAgICAgIDxoMz4ke3Byb2plY3RzW2ldLm5hbWV9PC9oMz5cclxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJwcm9qZWN0LWFjdGlvbnNcIj5cclxuICAgICAgICAgICAgPGJ1dHRvbiBjbGFzcz1cInByb2plY3QtYnRuXCIgZGF0YS1wcm9qZWN0LWluZGV4PVwiJHtpfVwiPlxyXG4gICAgICAgICAgICAgIDxpIGNsYXNzPVwiZmFzIGZhLWVkaXQgZWRpdFwiPjwvaT4gXHJcbiAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICA8YnV0dG9uIGNsYXNzPVwicHJvamVjdC1idG5cIiBkYXRhLXByb2plY3QtaW5kZXg9XCIke2l9XCI+XHJcbiAgICAgICAgICAgICAgPGkgY2xhc3M9XCJmYXMgZmEtdHJhc2gtYWx0IGRlbGV0ZVwiPjwvaT5cclxuICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICBgO1xyXG4gICAgcHJvamVjdExpc3REaXYuYXBwZW5kQ2hpbGQocHJvamVjdERpdik7XHJcbiAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiB1cGRhdGVUb2Rvcyhwcm9qZWN0SW5kZXhOdW1iZXIpIHtcclxuICBjb25zdCB0b2RvTGlzdERpdiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIudG9kby1jb250YWluZXJcIik7XHJcbiAgY29uc3QgcHJvamVjdFRpdGxlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNwcm9qZWN0LXRpdGxlXCIpO1xyXG4gIHByb2plY3RUaXRsZS50ZXh0Q29udGVudCA9IGAke3Byb2plY3RzW3Byb2plY3RJbmRleE51bWJlcl0ubmFtZX1gO1xyXG4gIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucHJvamVjdC10aXRsZS1zZWN0aW9uXCIpLmRhdGFzZXQucHJvamVjdEluZGV4ID0gYCR7cHJvamVjdEluZGV4TnVtYmVyfWA7XHJcbiAgdG9kb0xpc3REaXYuaW5uZXJIVE1MID0gXCJcIjtcclxuICBmb3IgKGxldCBpID0gMDsgaSA8IHByb2plY3RzW3Byb2plY3RJbmRleE51bWJlcl0udG9kb3MubGVuZ3RoOyBpKyspIHtcclxuICAgIGNvbnN0IHRvZG9EaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgdG9kb0Rpdi5jbGFzc0xpc3QuYWRkKFwidG9kb1wiKTtcclxuICAgIHRvZG9EaXYuaW5uZXJIVE1MID0gYFxyXG4gICAgICAgICAgPGgzPiR7cHJvamVjdHNbcHJvamVjdEluZGV4TnVtYmVyXS50b2Rvc1tpXS50aXRsZX08L2gzPlxyXG4gICAgICAgICAgPHA+XHJcbiAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwiZGF0ZVwiIGlkPVwiZGF0ZVwiIG5hbWU9XCJkYXRlXCIgdmFsdWU9JHtcclxuICAgICAgICAgICAgICBwcm9qZWN0c1twcm9qZWN0SW5kZXhOdW1iZXJdLnRvZG9zW2ldLmR1ZURhdGVcclxuICAgICAgICAgICAgfT5cclxuICAgICAgICAgIDwvcD5cclxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJ0b2RvLXByaW9yaXR5XCI+XHJcbiAgICAgICAgICAgIDxzZWxlY3QgY2xhc3M9XCJwcmlvcml0eS1zZWxlY3RcIj5cclxuICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiaGlnaFwiICR7XHJcbiAgICAgICAgICAgICAgICBwcm9qZWN0c1twcm9qZWN0SW5kZXhOdW1iZXJdLnRvZG9zW2ldLnByaW9yaXR5ID09PSBcImhpZ2hcIlxyXG4gICAgICAgICAgICAgICAgICA/IFwic2VsZWN0ZWRcIlxyXG4gICAgICAgICAgICAgICAgICA6IFwiXCJcclxuICAgICAgICAgICAgICB9PlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJwcmlvcml0eS1jaXJjbGUgcHJpb3JpdHktaGlnaFwiPjwvZGl2PlxyXG4gICAgICAgICAgICAgIDxwIGNsYXNzPVwicHJpb3JpdHktdGV4dC1oaWdoXCI+aGlnaDwvcD5cclxuICAgICAgICAgICAgICA8L29wdGlvbj5cclxuICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwibWVkaXVtXCIgJHtcclxuICAgICAgICAgICAgICAgIHByb2plY3RzW3Byb2plY3RJbmRleE51bWJlcl0udG9kb3NbaV0ucHJpb3JpdHkgPT09IFwibWVkaXVtXCJcclxuICAgICAgICAgICAgICAgICAgPyBcInNlbGVjdGVkXCJcclxuICAgICAgICAgICAgICAgICAgOiBcIlwiXHJcbiAgICAgICAgICAgICAgfT5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwicHJpb3JpdHktbWVkaXVtXCI+PC9kaXY+XHJcbiAgICAgICAgICAgICAgPHAgY2xhc3M9XCJwcmlvcml0eS10ZXh0LW1lZGl1bVwiPm1lZGl1bTwvcD5cclxuICAgICAgICAgICAgICA8L29wdGlvbj5cclxuICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwibG93XCIgJHtcclxuICAgICAgICAgICAgICAgIHByb2plY3RzW3Byb2plY3RJbmRleE51bWJlcl0udG9kb3NbaV0ucHJpb3JpdHkgPT09IFwibG93XCJcclxuICAgICAgICAgICAgICAgICAgPyBcInNlbGVjdGVkXCJcclxuICAgICAgICAgICAgICAgICAgOiBcIlwiXHJcbiAgICAgICAgICAgICAgfT5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwicHJpb3JpdHktY2lyY2xlIHByaW9yaXR5LWxvd1wiPjwvZGl2PlxyXG4gICAgICAgICAgICAgIDxwIGNsYXNzPVwicHJpb3JpdHktdGV4dC1sb3dcIj5sb3c8L3A+XHJcbiAgICAgICAgICAgICAgPC9vcHRpb24+XHJcbiAgICAgICAgICAgIDwvc2VsZWN0PlxyXG4gICAgICAgICAgICBcclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPGRpdiBjbGFzcz1cInRvZG8tYWN0aW9uc1wiPlxyXG4gICAgICAgICAgICA8bGFiZWwgY2xhc3M9XCJjb21wbGV0ZS1jaGVja2JveFwiPlxyXG4gICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwiY29tcGxldGUtbGFiZWwtdGV4dFwiPkNvbXBsZXRlPC9zcGFuPlxyXG4gICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwiY2hlY2tib3hcIiBuYW1lPVwiY2hlY2tib3hcIiAke3Byb2plY3RzW3Byb2plY3RJbmRleE51bWJlcl0udG9kb3NbaV0uY29tcGxldGUgPyBcImNoZWNrZWRcIiA6IFwiXCJ9PlxyXG4gICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwiY29tcGxldGUtdG9kby1idG5cIj48L3NwYW4+XHJcbiAgICAgICAgICAgIDwvbGFiZWw+XHJcbiAgICAgICAgICAgIDxidXR0b24gY2xhc3M9XCJlZGl0LXRvZG8tYnRuXCIgZGF0YS1wcm9qZWN0LWluZGV4PVwiJHtwcm9qZWN0SW5kZXhOdW1iZXJ9XCI+XHJcbiAgICAgICAgICAgICAgPGkgY2xhc3M9XCJmYXMgZmEtZWRpdFwiPjwvaT4gXHJcbiAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICA8YnV0dG9uIGNsYXNzPVwicHJvamVjdC1idG5cIiBkYXRhLXByb2plY3QtaW5kZXg9XCIke3Byb2plY3RJbmRleE51bWJlcn1cIj5cclxuICAgICAgICAgICAgICA8aSBjbGFzcz1cImZhcyBmYS10cmFzaC1hbHRcIj48L2k+XHJcbiAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgYDtcclxuICAgIHRvZG9MaXN0RGl2LmFwcGVuZENoaWxkKHRvZG9EaXYpO1xyXG4gIH1cclxufVxyXG5cclxuZnVuY3Rpb24gZXhwYW5kVG9kbyhwcm9qZWN0SW5kZXgsIHRvZG9JbmRleCkge1xyXG4gIC8vIGNvbnN0IHRvZG8gPSBwcm9qZWN0c1twcm9qZWN0SW5kZXhdLnRvZG9zW3RvZG9JbmRleF07XHJcbiAgLy8gdG9kb0RldGFpbHNEaXYuaW5uZXJIVE1MID0gYFxyXG4gIC8vICAgICAgIDxoMz4ke3RvZG8udGl0bGV9PC9oMz5cclxuICAvLyAgICAgICA8cD4ke3RvZG8uZGVzY3JpcHRpb259PC9wPlxyXG4gIC8vICAgICAgIDxwPkR1ZSBEYXRlOiAke3RvZG8uZHVlRGF0ZX08L3A+XHJcbiAgLy8gICAgICAgPHA+UHJpb3JpdHk6ICR7dG9kby5wcmlvcml0eX08L3A+XHJcbiAgLy8gICAgICAgPGJ1dHRvbiBjbGFzcz1cImVkaXQtdG9kby1idG5cIiBkYXRhLXByb2plY3QtaW5kZXg9XCIke3Byb2plY3RJbmRleH1cIiBkYXRhLXRvZG8taW5kZXg9XCIke3RvZG9JbmRleH1cIj5FZGl0PC9idXR0b24+XHJcbiAgLy8gICAgIGA7XHJcbn1cclxuXHJcbmNvbnN0IHRvZG9Gb3JtUHJpb2lyaXR5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi50b2RvLWZvcm0tc2VsZWN0XCIpO1xyXG50b2RvRm9ybVByaW9pcml0eS5hZGRFdmVudExpc3RlbmVyKFwiY2hhbmdlXCIsIGZ1bmN0aW9uKCl7XHJcbiAgc3dpdGNoICh0aGlzLnZhbHVlKSB7XHJcbiAgICBjYXNlIFwiaGlnaFwiOlxyXG4gICAgICB0aGlzLmNsYXNzTGlzdC5yZW1vdmUoXCJtZWRpdW1cIik7XHJcbiAgICAgIHRoaXMuY2xhc3NMaXN0LnJlbW92ZShcImxvd1wiKTtcclxuICAgICAgdGhpcy5jbGFzc0xpc3QuYWRkKFwiaGlnaFwiKTtcclxuICAgICAgYnJlYWs7XHJcbiAgICBjYXNlIFwibWVkaXVtXCI6XHJcbiAgICAgIHRoaXMuY2xhc3NMaXN0LmFkZChcIm1lZGl1bVwiKTtcclxuICAgICAgdGhpcy5jbGFzc0xpc3QucmVtb3ZlKFwibG93XCIpO1xyXG4gICAgICB0aGlzLmNsYXNzTGlzdC5yZW1vdmUoXCJoaWdoXCIpO1xyXG4gICAgICBicmVhaztcclxuICAgIGNhc2UgXCJsb3dcIjpcclxuICAgICAgdGhpcy5jbGFzc0xpc3QucmVtb3ZlKFwibWVkaXVtXCIpO1xyXG4gICAgICB0aGlzLmNsYXNzTGlzdC5hZGQoXCJsb3dcIik7XHJcbiAgICAgIHRoaXMuY2xhc3NMaXN0LnJlbW92ZShcImhpZ2hcIik7XHJcbiAgICAgIGJyZWFrO1xyXG4gIH1cclxufSlcclxuXHJcbmV4cG9ydCB7IHVwZGF0ZVByb2plY3RzLCB1cGRhdGVUb2RvcywgZXhwYW5kVG9kbyB9O1xyXG4iLCJpbXBvcnQgeyBhZGRUb2RvVG9Qcm9qZWN0LCBwcm9qZWN0cyB9IGZyb20gXCIuL2FwcFwiO1xyXG5pbXBvcnQgeyB1cGRhdGVQcm9qZWN0cywgdXBkYXRlVG9kb3MgfSBmcm9tIFwiLi9kb21cIjtcclxuaW1wb3J0IHsgYWRkUHJvamVjdCwgcmVtb3ZlUHJvamVjdCwgZWRpdFByb2plY3ROYW1lIH0gZnJvbSBcIi4vYXBwXCI7XHJcbmltcG9ydCB7IFRvZG8gfSBmcm9tIFwiLi90b2RvXCI7XHJcblxyXG5jb25zdCBwcm9qZWN0QWRkTW9kYWwgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInByb2plY3QtYWRkXCIpO1xyXG5jb25zdCBwcm9qZWN0RWRpdE1vZGFsID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJwcm9qZWN0LWVkaXRcIik7XHJcbmNvbnN0IHByb2plY3RBZGRCdG4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInByb2plY3QtYWRkLWJ0blwiKTtcclxuY29uc3QgY2xvc2VTcGFuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5jbG9zZS1zcGFuXCIpO1xyXG5jb25zdCBwcm9qZWN0QWRkRm9ybSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjcHJvamVjdC1hZGQtZm9ybVwiKTtcclxuY29uc3QgcHJvamVjdEVkaXRGb3JtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNwcm9qZWN0LWVkaXQtZm9ybVwiKTtcclxuY29uc3QgcHJvamVjdExpc3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3Byb2plY3QtbGlzdFwiKTtcclxuY29uc3QgZWRpdEhlYWRlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuZWRpdC1wcm9qZWN0LWJ0blwiKTtcclxuY29uc3QgYWRkVG9kb0J0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuYWRkLXRvZG8tYnRuXCIpO1xyXG5jb25zdCB0b2RvQWRkTW9kYWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3RvZG8tYWRkXCIpO1xyXG5jb25zdCB0b2RvQWRkRm9ybSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjdG9kby1hZGQtZm9ybVwiKTtcclxuXHJcbnByb2plY3RBZGRCdG4ub25jbGljayA9IGZ1bmN0aW9uICgpIHtcclxuICBwcm9qZWN0QWRkTW9kYWwuY2xhc3NMaXN0LmFkZChcInNob3dcIik7XHJcbn07XHJcblxyXG5jbG9zZVNwYW4uZm9yRWFjaCgoc3BhbikgPT4ge1xyXG4gIHNwYW4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uICgpIHtcclxuICAgIHByb2plY3RBZGRNb2RhbC5jbGFzc0xpc3QucmVtb3ZlKFwic2hvd1wiKTtcclxuICAgIHByb2plY3RFZGl0TW9kYWwuY2xhc3NMaXN0LnJlbW92ZShcInNob3dcIik7XHJcbiAgICB0b2RvQWRkTW9kYWwuY2xhc3NMaXN0LnJlbW92ZShcInNob3dcIik7XHJcbiAgfSk7XHJcbn0pO1xyXG5cclxud2luZG93Lm9uY2xpY2sgPSBmdW5jdGlvbiAoZXZlbnQpIHtcclxuICBpZiAoXHJcbiAgICBldmVudC50YXJnZXQgPT0gcHJvamVjdEFkZE1vZGFsIHx8XHJcbiAgICBldmVudC50YXJnZXQgPT0gcHJvamVjdEVkaXRNb2RhbCB8fFxyXG4gICAgZXZlbnQudGFyZ2V0ID09IHRvZG9BZGRNb2RhbFxyXG4gICkge1xyXG4gICAgcHJvamVjdEFkZE1vZGFsLmNsYXNzTGlzdC5yZW1vdmUoXCJzaG93XCIpO1xyXG4gICAgcHJvamVjdEVkaXRNb2RhbC5jbGFzc0xpc3QucmVtb3ZlKFwic2hvd1wiKTtcclxuICAgIHRvZG9BZGRNb2RhbC5jbGFzc0xpc3QucmVtb3ZlKFwic2hvd1wiKTtcclxuICB9XHJcbn07XHJcblxyXG5wcm9qZWN0QWRkRm9ybS5hZGRFdmVudExpc3RlbmVyKFwic3VibWl0XCIsIGZ1bmN0aW9uIChldmVudCkge1xyXG4gIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgcHJvamVjdEFkZE1vZGFsLmNsYXNzTGlzdC5yZW1vdmUoXCJzaG93XCIpO1xyXG4gIGFkZFByb2plY3QoZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNwcm9qZWN0LW5hbWVcIikudmFsdWUpO1xyXG4gIHVwZGF0ZVByb2plY3RzKCk7XHJcbn0pO1xyXG5cclxucHJvamVjdExpc3QuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uIChlKSB7XHJcbiAgaWYgKGUudGFyZ2V0LmNsYXNzTGlzdC5jb250YWlucyhcImRlbGV0ZVwiKSkge1xyXG4gICAgcmVtb3ZlUHJvamVjdChlLnRhcmdldC5wYXJlbnROb2RlLmdldEF0dHJpYnV0ZShcImRhdGEtcHJvamVjdC1pbmRleFwiKSk7XHJcbiAgICB1cGRhdGVQcm9qZWN0cygpO1xyXG4gIH1cclxuICBpZiAoZS50YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKFwiZWRpdFwiKSkge1xyXG4gICAgZWRpdFByb2plY3QoZSk7XHJcbiAgICByZXR1cm47XHJcbiAgfVxyXG4gIGlmIChlLnRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMoXCJwcm9qZWN0XCIpKSB7XHJcbiAgICB1cGRhdGVUb2RvcyhlLnRhcmdldC5nZXRBdHRyaWJ1dGUoXCJkYXRhLXByb2plY3QtaW5kZXhcIikpO1xyXG4gIH0gZWxzZSB7XHJcbiAgICB1cGRhdGVUb2RvcyhlLnRhcmdldC5wYXJlbnROb2RlLmdldEF0dHJpYnV0ZShcImRhdGEtcHJvamVjdC1pbmRleFwiKSk7XHJcbiAgfVxyXG59KTtcclxuXHJcbmVkaXRIZWFkZXIuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uIChlKSB7XHJcbiAgZWRpdFByb2plY3QoZSk7XHJcbn0pO1xyXG5cclxuYWRkVG9kb0J0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24gKCkge1xyXG4gIHRvZG9BZGRNb2RhbC5jbGFzc0xpc3QuYWRkKFwic2hvd1wiKTtcclxufSk7XHJcblxyXG5mdW5jdGlvbiBlZGl0UHJvamVjdChlKSB7XHJcbiAgcHJvamVjdEVkaXRNb2RhbC5jbGFzc0xpc3QuYWRkKFwic2hvd1wiKTtcclxuICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3Byb2plY3QtZWRpdC1uYW1lXCIpLnZhbHVlID0gYCR7XHJcbiAgICBwcm9qZWN0c1tlLnRhcmdldC5wYXJlbnROb2RlLnBhcmVudE5vZGUuZ2V0QXR0cmlidXRlKFwiZGF0YS1wcm9qZWN0LWluZGV4XCIpXS5uYW1lXHJcbiAgfWA7XHJcbiAgcHJvamVjdEVkaXRGb3JtLmFkZEV2ZW50TGlzdGVuZXIoXCJzdWJtaXRcIiwgZnVuY3Rpb24gX2xpc3RlbmVyKGV2ZW50KSB7XHJcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgcHJvamVjdEVkaXRNb2RhbC5jbGFzc0xpc3QucmVtb3ZlKFwic2hvd1wiKTtcclxuICAgIGVkaXRQcm9qZWN0TmFtZShcclxuICAgICAgZS50YXJnZXQucGFyZW50Tm9kZS5wYXJlbnROb2RlLmdldEF0dHJpYnV0ZShcImRhdGEtcHJvamVjdC1pbmRleFwiKSxcclxuICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNwcm9qZWN0LWVkaXQtbmFtZVwiKS52YWx1ZVxyXG4gICAgKTtcclxuICAgIHVwZGF0ZVByb2plY3RzKCk7XHJcbiAgICB1cGRhdGVUb2RvcyhlLnRhcmdldC5wYXJlbnROb2RlLnBhcmVudE5vZGUuZ2V0QXR0cmlidXRlKFwiZGF0YS1wcm9qZWN0LWluZGV4XCIpKTtcclxuICAgIHByb2plY3RFZGl0Rm9ybS5yZW1vdmVFdmVudExpc3RlbmVyKFwic3VibWl0XCIsIF9saXN0ZW5lcik7XHJcbiAgfSk7XHJcbn1cclxuXHJcbnRvZG9BZGRGb3JtLmFkZEV2ZW50TGlzdGVuZXIoXCJzdWJtaXRcIiwgZnVuY3Rpb24gKGUpIHtcclxuICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgdG9kb0FkZE1vZGFsLmNsYXNzTGlzdC5yZW1vdmUoXCJzaG93XCIpO1xyXG4gIGNvbnN0IGZvcm1EYXRhID0gbmV3IEZvcm1EYXRhKHRvZG9BZGRGb3JtKTtcclxuICBjb25zdCB2YWx1ZXMgPSBPYmplY3QuZnJvbUVudHJpZXMoZm9ybURhdGEuZW50cmllcygpKTtcclxuICBjb25zdCB0b2RvID0gbmV3IFRvZG8oXHJcbiAgICB2YWx1ZXNbXCJ0aXRsZVwiXSxcclxuICAgIHZhbHVlc1tcImR1ZS1kYXRlXCJdLFxyXG4gICAgdmFsdWVzW1wicHJpb3JpdHlcIl0sXHJcbiAgICB2YWx1ZXNbXCJjb21wbGV0ZVwiXVxyXG4gICk7XHJcbiAgYWRkVG9kb1RvUHJvamVjdChkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnByb2plY3QtdGl0bGUtc2VjdGlvblwiKS5kYXRhc2V0LnByb2plY3RJbmRleCwgdG9kbyk7XHJcbiAgdXBkYXRlVG9kb3MoZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5wcm9qZWN0LXRpdGxlLXNlY3Rpb25cIikuZGF0YXNldC5wcm9qZWN0SW5kZXgpO1xyXG59KTtcclxuIiwiaW1wb3J0IHsgVG9kbyB9IGZyb20gXCIuL3RvZG8uanNcIjtcclxuaW1wb3J0IHsgdXBkYXRlUHJvamVjdHMsIHVwZGF0ZVRvZG9zLCBleHBhbmRUb2RvIH0gZnJvbSBcIi4vZG9tLmpzXCI7XHJcbmltcG9ydCB7IGFkZFByb2plY3QsIGFkZFRvZG9Ub1Byb2plY3QgfSBmcm9tIFwiLi9hcHAuanNcIjtcclxuaW1wb3J0IFwiLi9jb250cm9sbGVyLmpzXCJcclxuXHJcblxyXG5jb25zdCB0b2RvMSA9IG5ldyBUb2RvKFxyXG4gIFwiRmluaXNoIHByb2plY3RcIixcclxuICBcIjIwMjMtMDQtMDFcIixcclxuICBcIm1lZGl1bVwiLFxyXG4gIHRydWVcclxuKTtcclxuYWRkVG9kb1RvUHJvamVjdCgwLCB0b2RvMSk7XHJcbmFkZFRvZG9Ub1Byb2plY3QoMCwgdG9kbzEpO1xyXG5hZGRUb2RvVG9Qcm9qZWN0KDAsIHRvZG8xKTtcclxuXHJcbmFkZFByb2plY3QoXCJTaG9wcGluZyBMaXN0XCIpO1xyXG5jb25zdCB0b2RvMiA9IG5ldyBUb2RvKFxyXG4gIFwiQnV5IGdyb2Nlcmllc1wiLFxyXG4gIFwiMjAyMy0wNC0wM1wiLFxyXG4gIFwibWVkaXVtXCIsXHJcbiAgdHJ1ZVxyXG4pO1xyXG5hZGRUb2RvVG9Qcm9qZWN0KDEsIHRvZG8yKTtcclxuXHJcbnVwZGF0ZVByb2plY3RzKCk7XHJcbnVwZGF0ZVRvZG9zKDApO1xyXG5leHBhbmRUb2RvKDAsIDApO1xyXG5cclxuIl0sIm5hbWVzIjpbIlRvZG8iLCJ0aXRsZSIsImR1ZURhdGUiLCJwcmlvcml0eSIsImNvbXBsZXRlIiwidGhpcyIsIlByb2plY3QiLCJuYW1lIiwidG9kb3MiLCJwcm9qZWN0cyIsImFkZFByb2plY3QiLCJwcm9qZWN0IiwicHVzaCIsImFkZFRvZG9Ub1Byb2plY3QiLCJwcm9qZWN0SW5kZXgiLCJ0b2RvIiwidXBkYXRlUHJvamVjdHMiLCJwcm9qZWN0TGlzdERpdiIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvciIsImlubmVySFRNTCIsImkiLCJsZW5ndGgiLCJwcm9qZWN0RGl2IiwiY3JlYXRlRWxlbWVudCIsImNsYXNzTGlzdCIsImFkZCIsImRhdGFzZXQiLCJhcHBlbmRDaGlsZCIsInVwZGF0ZVRvZG9zIiwicHJvamVjdEluZGV4TnVtYmVyIiwidG9kb0xpc3REaXYiLCJ0ZXh0Q29udGVudCIsInRvZG9EaXYiLCJhZGRFdmVudExpc3RlbmVyIiwidmFsdWUiLCJyZW1vdmUiLCJwcm9qZWN0QWRkTW9kYWwiLCJnZXRFbGVtZW50QnlJZCIsInByb2plY3RFZGl0TW9kYWwiLCJwcm9qZWN0QWRkQnRuIiwiY2xvc2VTcGFuIiwicXVlcnlTZWxlY3RvckFsbCIsInByb2plY3RBZGRGb3JtIiwicHJvamVjdEVkaXRGb3JtIiwicHJvamVjdExpc3QiLCJlZGl0SGVhZGVyIiwiYWRkVG9kb0J0biIsInRvZG9BZGRNb2RhbCIsInRvZG9BZGRGb3JtIiwiZWRpdFByb2plY3QiLCJlIiwidGFyZ2V0IiwicGFyZW50Tm9kZSIsImdldEF0dHJpYnV0ZSIsIl9saXN0ZW5lciIsImV2ZW50IiwiaW5kZXgiLCJuZXdOYW1lIiwicHJldmVudERlZmF1bHQiLCJyZW1vdmVFdmVudExpc3RlbmVyIiwib25jbGljayIsImZvckVhY2giLCJzcGFuIiwid2luZG93IiwiY29udGFpbnMiLCJzcGxpY2UiLCJmb3JtRGF0YSIsIkZvcm1EYXRhIiwidmFsdWVzIiwiT2JqZWN0IiwiZnJvbUVudHJpZXMiLCJlbnRyaWVzIiwidG9kbzEiXSwic291cmNlUm9vdCI6IiJ9