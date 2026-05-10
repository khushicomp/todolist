import { addProject, addTodo, deleteTodo,deleteProject, toggleTodo, projects } from "../logic/manager.js";
import "./style.css";

let currentProjectId = projects[0]?.id;

function renderprojects(projects) {
    const container = document.getElementById("app");
    container.innerHTML = "";

    // App Container
    const appContainer = document.createElement("div");
    appContainer.className = "app-container";

    // Sidebar
    const sidebar = document.createElement("aside");
    sidebar.className = "sidebar";

    const sidebarTitle = document.createElement("h2");
    sidebarTitle.textContent = "Projects";
    sidebar.appendChild(sidebarTitle);

    const projectList = document.createElement("div");
    projectList.className = "project-list";

    projects.forEach(project => {
        const projectBtn = document.createElement("button");
        projectBtn.className = "project-btn";
        if (project.id === currentProjectId) {
            projectBtn.classList.add("active");
        }
        projectBtn.textContent = project.name;
        projectBtn.addEventListener("click", () => {
            currentProjectId = project.id;
            renderprojects(projects);
        });
        projectList.appendChild(projectBtn);
    });
    sidebar.appendChild(projectList);

    const addProjectForm = document.createElement("div");
    addProjectForm.className = "add-project-form";

    const projectInput = document.createElement("input");
    projectInput.type = "text";
    projectInput.placeholder = "New Project";

    const projectBtn = document.createElement("button");
    projectBtn.className = "primary-btn";
    projectBtn.textContent = "Add Project";

    projectBtn.addEventListener("click", () => {
        const name = projectInput.value.trim();
        if (!name) return;
        const newProject = addProject(name);
        projectInput.value = "";
        currentProjectId = newProject.id;
        renderprojects(projects);
    });

    addProjectForm.appendChild(projectInput);
    addProjectForm.appendChild(projectBtn);
    sidebar.appendChild(addProjectForm);

    appContainer.appendChild(sidebar);

    // Main Content
    const mainContent = document.createElement("main");
    mainContent.className = "main-content";

    const activeProject = projects.find(p => p.id === currentProjectId);

    if (activeProject) {
        const mainHeader = document.createElement("div");
        mainHeader.className = "main-header";
        const mainTitle = document.createElement("h1");
        mainTitle.textContent = activeProject.name;
        mainHeader.appendChild(mainTitle);
        mainContent.appendChild(mainHeader);

        // Add Todo Form
        const todoForm = document.createElement("div");
        todoForm.className = "add-todo-form";

        const titleInput = document.createElement("input");
        titleInput.type = "text";
        titleInput.placeholder = "Task title";

        const dateInput = document.createElement("input");
        dateInput.type = "date";

        const prioritySelect = document.createElement("select");
        ["low", "medium", "high"].forEach(p => {
            const option = document.createElement("option");
            option.value = p;
            option.textContent = p.charAt(0).toUpperCase() + p.slice(1);
            prioritySelect.appendChild(option);
        });

        const addTodoBtn = document.createElement("button");
        addTodoBtn.className = "primary-btn";
        addTodoBtn.textContent = "Add Task";

        addTodoBtn.addEventListener("click", () => {
            const title = titleInput.value.trim();
            const date = dateInput.value;
            const priority = prioritySelect.value;

            if (!title || !date) return;

            addTodo(activeProject.id, title, "", date, priority);
            renderprojects(projects);
        });

        todoForm.appendChild(titleInput);
        todoForm.appendChild(dateInput);
        todoForm.appendChild(prioritySelect);
        todoForm.appendChild(addTodoBtn);
        mainContent.appendChild(todoForm);

        // Todo List
        const todoListDiv = document.createElement("div");
        todoListDiv.className = "todo-list";

        activeProject.todos.forEach(todo => {
            const todoCard = document.createElement("div");
            todoCard.className = "todo-card";
            if (todo.completed) {
                todoCard.classList.add("completed");
            }

            const priorityIndicator = document.createElement("div");
            priorityIndicator.className = `priority-indicator priority-${todo.priority || 'none'}`;
            todoCard.appendChild(priorityIndicator);

            const checkbox = document.createElement("input");
            checkbox.type = "checkbox";
            checkbox.className = "custom-checkbox";
            checkbox.checked = todo.completed;
            checkbox.addEventListener("change", () => {
                toggleTodo(activeProject.id, todo.id);
                renderprojects(projects);
            });
            todoCard.appendChild(checkbox);

            const contentDiv = document.createElement("div");
            contentDiv.className = "todo-content";

            const titleSpan = document.createElement("span");
            titleSpan.className = "todo-text";
            titleSpan.textContent = todo.title;

            const dateSpan = document.createElement("span");
            dateSpan.className = "todo-date";
            dateSpan.textContent = todo.duedate;

            contentDiv.appendChild(titleSpan);
            contentDiv.appendChild(dateSpan);
            todoCard.appendChild(contentDiv);

            const deleteBtn = document.createElement("button");
            deleteBtn.className = "delete-btn";
            deleteBtn.textContent = "✕";
            deleteBtn.title = "Delete task";
            deleteBtn.addEventListener("click", () => {
                deleteTodo(activeProject.id, todo.id);
                renderprojects(projects);
            });
            todoCard.appendChild(deleteBtn);

            todoListDiv.appendChild(todoCard);
        });

        mainContent.appendChild(todoListDiv);
    } else {
        const noProjectMsg = document.createElement("p");
        noProjectMsg.textContent = "Select a project or create a new one.";
        noProjectMsg.style.color = "var(--text-muted)";
        mainContent.appendChild(noProjectMsg);
    }

    appContainer.appendChild(mainContent);
    container.appendChild(appContainer);
}

export { renderprojects };