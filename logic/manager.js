import { createProject } from "./project.js";
import { createTodo } from "./todo.js";


let projects = [];

function addProject(name){
    const project = createProject(name);
    projects.push(project);
    return project;
}

function getProject(projectId){
    return projects.find(p=>p.id ===projectId);
}


function addTodo(projectId, title, description, duedate, priority){
    const project = getProject(projectId);
    if(!project) return;

    const todo = createTodo(title, description, duedate, priority);
    project.todos.push(todo);

    return todo;
}

function deleteTodo(projectId, todoId){
    const project=getProject(projectId);
    if(!project) return;

    project.todos = project.todos.filter(todo=>todo.id!==todoId);
}

function toggleTodo(projectId, todoId){
    const project=getProject(projectId);
    if(!project) return;

    const todo=project.todos.find(t=>t.id===todoId);
    if(!todo) return;

    todo.completed = !todo.completed;

}

export {projects, addProject, getProject, addTodo, deleteTodo, toggleTodo};