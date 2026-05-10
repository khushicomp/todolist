import { addTodo, deleteTodo, toggleTodo, projects } from "../logic/manager.js";

const formdiv=document.createElement("div");

const titleInput=document.createElement("input");
titleInput.placeholder="Title";

const dateInput=document.createElement("input");
dateInput.type="date";

const priorityInput=document.createElement("select");

["low", "medium", "high"].forEach(p=>{
    const option=document.createElement("option");
    option.value=p;
    option.textContent=p;
    priorityInput.appendChild(option);
});

const addBtn=document.createElement("button");
addBtn.textContent="Add Todo";

formdiv.appendChild(titleInput);
formdiv.appendChild(dateInput);
formdiv.appendChild(priorityInput);
formdiv.appendChild(addBtn);
container.appendChild(formdiv);

addBtn.addEventListener("click", ()=>{
    const title=titleInput.value;
    const date=dateInput.value;
    const priority=priorityInput.value;

    if(!title||!date) return;

    const project=projects[0];

    addTodo(project.id, title, "", date, priority);

    renderprojects(projects);
})

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