const addTodoBtn = document.getElementById("addTodoBtn")
const inputTag = document.getElementById("todoInput")
const todoListUl = document.getElementById("todoList")

let todos = []
const todosString = localStorage.getItem("todos")
if (todosString) {
    todos = JSON.parse(todosString)
}

const populateTodos = () => {
    let string = ""

    for (const todo of todos) {
        string += `<li id="todo-${todo.id}" class="todo-item ${todo.isCompleted ? "completed" : ""}">
        <input type="checkbox" class="todo-checkbox" ${todo.isCompleted ? "checked" : ""}>
        <span class="todo-text">${todo.title}</span>
        <button class="delete-btn">×</button>
        </li>`
    }

    todoListUl.innerHTML = string
}

// Delegate click events (works even after re-rendering)
todoListUl.addEventListener("click", (e) => {
    const target = e.target
    const listItem = target.closest("li")
    if (!listItem) return

    const id = listItem.id
    const todoId = Number(id.replace("todo-", ""))

    if (target.matches(".todo-checkbox")) {
        const isCompleted = target.checked
        todos = todos.map((todo) => {
            if (todo.id === todoId) return { ...todo, isCompleted }
            return todo
        })
        listItem.classList.toggle("completed", isCompleted)
        localStorage.setItem("todos", JSON.stringify(todos))
        return
    }

    if (target.matches(".delete-btn")) {
        todos = todos.filter((todo) => todo.id !== todoId)
        localStorage.setItem("todos", JSON.stringify(todos))
        populateTodos()
    }
})

addTodoBtn.addEventListener("click", () => {
    const todoText = inputTag.value.trim()
    if (!todoText) return

    const todo = {
        id: Date.now(),
        title: todoText,
        isCompleted: false,
    }

    todos.push(todo)
    localStorage.setItem("todos", JSON.stringify(todos))
    inputTag.value = ""
    populateTodos()
})

populateTodos()

