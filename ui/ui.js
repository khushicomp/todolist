import { deleteTodo, toggleTodo, projects } from "../logic/manager.js";

function renderprojects(projects){
    const container=document.getElementById("app");
    container.innerHTML="";

    projects.forEach(project =>{
        const projectDiv=document.createElement("div");

        const title=document.createElement("h2");
        title.textContent=project.name;

        projectDiv.appendChild(title);

        project.todos.forEach(todo=>{
            const todoDiv=document.createElement("div");

            const checkbox=document.createElement("input");
            checkbox.type="checkbox";
            checkbox.checked=todo.completed;

            checkbox.addEventListener("change", ()=>{
                toggleTodo(project.id, todo.id);
                renderprojects(projects);
            });

            const text=document.createElement("span");
            text.textContent=`${todo.title} - ${todo.duedate}`;
            if(todo.completed){
                text.style.textDecoration="line-through";
            }

            const deletebtn=document.createElement("button");
            deletebtn.textContent="Delete";

            deletebtn.addEventListener("click", ()=>{
                deleteTodo(project.id, todo.id);
                renderprojects(projects);
            })

            todoDiv.appendChild(checkbox);
            todoDiv.appendChild(text);
            todoDiv.appendChild(deletebtn);
            projectDiv.appendChild(todoDiv);
        });

        container.appendChild(projectDiv);
    });
}

export {renderprojects};