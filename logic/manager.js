import { createProject } from "./project.js";
import { createTodo } from "./todo.js";
import { saveProjects, loadProjects } from "../storage/storage.js";

let projects = loadProjects();

function addProject(name){
    const project = createProject(name);
    projects.push(project);
    saveProjects(projects);
    return project;
}

function getProject(projectId){
    return projects.find(p=>p.id ===projectId);
}

function deleteProject(projectId){
    const index = projects.findIndex(
        project=>project.id===projectId
    );

    if(index!==-1){
        projects.splice(index,1);
    }
    saveProjects(projects);
}


function addTodo(projectId, title, description, duedate, priority){
    const project = getProject(projectId);
    if(!project) return;

    const todo = createTodo(title, description, duedate, priority);
    project.todos.push(todo);
    saveProjects(projects);
    return todo;
}

function deleteTodo(projectId, todoId){
    const project=getProject(projectId);
    if(!project) return;

    project.todos = project.todos.filter(todo=>todo.id!==todoId);
    saveProjects(projects);
}

function toggleTodo(projectId, todoId){
    const project=getProject(projectId);
    if(!project) return;

    const todo=project.todos.find(t=>t.id===todoId);
    if(!todo) return;

    todo.completed = !todo.completed;
    saveProjects(projects);

}

export {projects, addProject, getProject, addTodo, deleteTodo, toggleTodo, deleteProject};