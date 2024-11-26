var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
const todoListEl = document.getElementById("todoList");
const todoInputEl = document.getElementById("todoInput");
const API_URL = "http://localhost:3000/todos";
fetch(API_URL)
    .then((response) => response.json())
    .then((data) => renderTodo(data))
    .catch((error) => console.log("error: " + error));
const fetchTodos = () => __awaiter(this, void 0, void 0, function* () {
    const response = yield fetch(API_URL);
    return yield response.json();
});
//post 요청
const fetchPost = (newToDo) => __awaiter(this, void 0, void 0, function* () {
    return yield fetch(API_URL, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(Object.assign({}, newToDo)),
    }).then((response) => response.json());
});
const fetchDelete = (todoId) => {
    return fetch(API_URL + "/" + todoId, {
        method: "DELETE",
    });
};
//patㅊh
const fetchPatch = (todoId, newTitle) => {
    return fetch(API_URL + "/" + todoId, {
        method: "PATCH",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            title: newTitle,
        }),
    });
};
//만약 null일 시 return 하도록 return
const renderTodo = (newTodos) => {
    if (!todoListEl)
        return;
    todoListEl.innerHTML = "";
    newTodos.forEach((todo) => {
        const listEl = document.createElement("li");
        listEl.textContent = todo.title;
        listEl.id = `todo-${todo.id}`;
        const deleteEl = document.createElement("span");
        deleteEl.textContent = "🗑️";
        deleteEl.onclick = () => deleteTodo(todo.id);
        const updateEl = document.createElement("span");
        updateEl.textContent = "✏️";
        updateEl.onclick = () => updateTodo(todo.id, todo.title);
        listEl.append(deleteEl);
        listEl.append(updateEl);
        todoListEl.append(listEl);
    });
};
//null 처리 필요
const addTodo = () => {
    if (todoInputEl == null)
        return;
    const title = todoInputEl.value;
    const date = new Date();
    const createdAt = date.toDateString();
    if (!title)
        return;
    //Omit <Todo,"completed"> => 그냥 개념만 알고 가기 ㅇㅇ
    const newTodo = {
        id: date.getTime(),
        title,
        createdAt,
        completed: false,
    };
    fetchPost(newTodo)
        .then(() => {
        todoInputEl.value = "";
        return fetchTodos();
    })
        .then((data) => renderTodo(data));
};
const deleteTodo = (todoId) => {
    if (todoId == null)
        return;
    fetchDelete(todoId)
        .then(() => fetchTodos())
        .then((data) => renderTodo(data));
};
const updateTodo = (todoId, title) => {
    //id에 해당하는 아이템 불러옴
    const todoItem = document.querySelector(`#todo-${todoId}`);
    if (!todoItem)
        return;
    todoItem.innerHTML = "";
    const updateInput = document.createElement("input");
    updateInput.type = "text";
    updateInput.value = title;
    todoItem.append(updateInput);
    const updateTodoItem = (event) => {
        if (event.key === "Enter") {
            const newTitle = updateInput.value.trim();
            if (!newTitle) {
                alert("Todo의 title을 입력해주세요.");
                return;
            }
            updateToDoTitle(todoId, updateInput.value)
                .then(() => {
                todoItem.innerHTML = "";
                return fetchTodos();
            })
                .then((data) => renderTodo(data))
                .catch((error) => {
                console.log("error: ", error);
            });
        }
    };
    updateInput.addEventListener("keydown", updateTodoItem);
};
//DB 수정
const updateToDoTitle = (todoId, newTitle) => {
    if (!newTitle)
        return Promise.reject(new Error("title cannot be empty"));
    return fetchPatch(todoId, newTitle);
};
