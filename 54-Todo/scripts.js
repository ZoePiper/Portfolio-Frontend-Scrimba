const form = document.getElementById('form')
const input = document.getElementById('input')
const todosUL = document.getElementById('todos')

// If there is a local storage we want it to load here
const todos = JSON.parse(localStorage.getItem('todos'))

//if there are todos we want to loop through each one we want to addTodo pass in the todo
if (todos) {
    todos.forEach(todo => addTodo(todo))
}

form.addEventListener("submit", (e) => {
    e.preventDefault()

    addTodo()
})

function addTodo(todo) {
    let todoText = input.value

    if (todo) {
        todoText = todo.text
    }

    if (todoText) {
        const todoEL = document.createElement('li')
        if (todo && todo.completed) {
            todosEL.classList.add('completed')
        }
        todoEL.innerText = todoText

        todoEL.addEventListener('click', () => {
            todoEL.classList.toggle('completed')
            updateLS()
        })

        todoEL.addEventListener('contextmenu', (e) => {
            e.preventDefault()

            todosEL.remove()
            updateLS()
        })


        todosUL.appendChild(todoEL)

        input.value = ''

        updateLS()
    }

    //console.log(todoText)
}
function updateLS() {
    todosEL = document.querySelectorAll('li')

    const todos = []

    todosEL.forEach(todoEL => {
        todos.push({
            text: todoEL.innerText,
            completed: todoEL.classList.contains
                ('completed')
            // is shown in the DOM in Application
        })
    })
    localStorage.setItem('todos', JSON.stringify(todos))

    /*
        JSON.parse(localStorage.getItem(obj)))
saves as a array with JSON Stringify to make a string
and if you want to get it out of storage use JSON.parse
*/

}

