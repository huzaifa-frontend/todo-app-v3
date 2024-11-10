let idCount = 1;
let todos = [];

document.getElementById("inp").addEventListener("keypress", function (e) {
    if (e.key === "Enter") {
        addTodo();
    }
});

function addTodo() {
    const inpVal = document.getElementById("inp");

    if (inpVal.value.trim() === "") return alert("Please enter a todo");

    // Add new todo to the array
    todos.push({ id: idCount, text: inpVal.value });
    idCount++;
    inpVal.value = "";

    // Render the updated todo list
    render();
}

function deleteTodo(id) {
    todos = todos.filter(todo => todo.id !== id);
    render();
}

function updateTodo(id) {
    const inpVal = document.getElementById("inp");
    if (inpVal.value.trim() === "") return alert("Please enter a todo to update");

    // Update the todo text in the array
    todos = todos.map(todo => todo.id === id ? { ...todo, text: inpVal.value } : todo);
    inpVal.value = "";

    // Render the updated todo list
    render();
}

function render() {
    const todosContainer = document.getElementById("todos");
    todosContainer.innerHTML = "";

    todos.forEach(todo => {
        const element = document.createElement("div");
        element.setAttribute("id", todo.id);
        element.setAttribute("class", "todo");

        element.innerHTML = `
            <p>${todo.text}</p>
            <button class="deleteBtn" onclick="deleteTodo(${todo.id})">Delete</button>
            <button class="updateBtn" onclick="updateTodo(${todo.id})">Update</button>
        `;

        todosContainer.appendChild(element);
    });
}

// Initial render
render();
