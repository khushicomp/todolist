function createTodo(title, description, duedate, priority){
    return {
        id: crypto.randomUUID(),
        title,
        description,
        duedate,
        priority,
        completed: false,
        notes: "",
        checklist: []
    };
}

export {createTodo};