const todoListEl = document.getElementById("todoList");
const todoInputEl = document.getElementById("todoInput") as HTMLInputElement;
// todoInputEl 가 항상 HTMLInputElement 임을 명시

const API_URL = "http://localhost:8080/todos";

// 새로운 타입 정의
interface Todo {
    id: number;
    title: string;
    createdAt: string;
    completed: boolean;
}

fetch(API_URL)
    .then((response) => response.json())
    .then((data: Todo[]) => renderTodo(data))
// .then((data) => renderTodo(data));

const renderTodo = (newTodos: Todo[]): void => {
    if (!todoListEl) return;
    // 타입이 null인 경우가 있어서 아랫부분이 null이 아님을 보이며 타입을 좁히려고 씀

    todoListEl.innerHTML = "";
    newTodos.forEach((todo) => {
        const listEl = document.createElement("li");
        listEl.textContent = todo.title;
        listEl.id = `todo-${todo.id}`;

        const deleteEl = document.createElement("span");
        deleteEl.textContent = "🗑️";
        deleteEl.onclick = () => deleteTodo(todo.id);

        const udpateEl = document.createElement("span");
        udpateEl.textContent = "✏️";
        udpateEl.onclick = () => updateTodo(todo.id, todo.title);

        listEl.append(deleteEl);
        listEl.append(udpateEl);
        todoListEl.append(listEl);
    });
};

const updateTodo = (todoId: number, originalTitle: string): void => {
    const todoItem = document.querySelector(`#todo-${todoId}`);
    if (!todoItem) return;

    const inputEl = document.createElement("input");
    inputEl.type = "text";
    inputEl.value = originalTitle;
    todoItem.innerHTML = "";
    todoItem.appendChild(inputEl);

    inputEl.addEventListener("keydown", (event) => {
        if (event.key === "Enter") {
            const updatedTitle = inputEl.value;
            const date = new Date();
            const createdAt = date.toDateString();

            const updatedTodo = {
                title: updatedTitle,
                createdAt: createdAt,
                completed: false
            };

            fetch(API_URL + "/" + todoId, {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(updatedTodo),
            })
                .then((response) => response.json())
                .then((data: Todo[]) => { renderTodo(data); })
        }
    });
};

const addTodo = (): void => {
    if (!todoInputEl) return;

    const title = todoInputEl.value;
    const date = new Date();
    const createdAt = date.toDateString();

    if (!title) return;

    const newTodo: Omit<Todo, "completed"> = {
        id: date.getTime(),
        title,
        createdAt,
        //completed: false 로 주고 fetch의 body에 ...newTodo만 넣어도 됨
    };

    fetch(API_URL, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({ ...newTodo, completed: false }),
    })
        .then((response) => response.json())
        .then(() => {
            if (todoInputEl) {
                todoInputEl.value = "";
            }
            return fetch(API_URL);
        })
        .then((response) => response.json())
        .then((data: Todo[]) => renderTodo(data));
};

const deleteTodo = (todoId: number): void => {
    fetch(API_URL + "/" + todoId, {
        method: "DELETE",
    })
        .then(() => fetch(API_URL))
        .then((response) => response.json())
        .then((data: Todo[]) => renderTodo(data));
};
