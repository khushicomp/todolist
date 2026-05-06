import { addProject, addTodo, projects } from "../logic/manager.js";
import { renderprojects } from "../ui/ui.js";

const project = addProject("Default");

addTodo(project.id, "Study", "DSA practice", "2026-05-10", "high");
addTodo(project.id, "Gym", "Workout", "2026-05-08", "medium");

console.log(projects);

renderprojects(projects);