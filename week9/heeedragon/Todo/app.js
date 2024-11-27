var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var todoListEl = document.getElementById("todoList");
var todoInputEl = document.getElementById("todoInput");
// todoInputEl 가 항상 HTMLInputElement 임을 명시
var API_URL = "http://localhost:8080/todos";
fetch(API_URL)
    .then(function (response) { return response.json(); })
    .then(function (data) { return renderTodo(data); });
// .then((data) => renderTodo(data));
var renderTodo = function (newTodos) {
    if (!todoListEl)
        return;
    // 타입이 null인 경우가 있어서 아랫부분이 null이 아님을 보이며 타입을 좁히려고 씀
    todoListEl.innerHTML = "";
    newTodos.forEach(function (todo) {
        var listEl = document.createElement("li");
        listEl.textContent = todo.title;
        listEl.id = "todo-".concat(todo.id);
        var deleteEl = document.createElement("span");
        deleteEl.textContent = "🗑️";
        deleteEl.onclick = function () { return deleteTodo(todo.id); };
        var udpateEl = document.createElement("span");
        udpateEl.textContent = "✏️";
        udpateEl.onclick = function () { return updateTodo(todo.id, todo.title); };
        listEl.append(deleteEl);
        listEl.append(udpateEl);
        todoListEl.append(listEl);
    });
};
var updateTodo = function (todoId, originalTitle) {
    var todoItem = document.querySelector("#todo-".concat(todoId));
    if (!todoItem)
        return;
    var inputEl = document.createElement("input");
    inputEl.type = "text";
    inputEl.value = originalTitle;
    todoItem.innerHTML = "";
    todoItem.appendChild(inputEl);
    inputEl.addEventListener("keydown", function (event) {
        if (event.key === "Enter") {
            var updatedTitle = inputEl.value;
            var date = new Date();
            var createdAt = date.toDateString();
            var updatedTodo = {
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
                .then(function (response) { return response.json(); })
                .then(function (data) { renderTodo(data); });
        }
    });
};
var addTodo = function () {
    if (!todoInputEl)
        return;
    var title = todoInputEl.value;
    var date = new Date();
    var createdAt = date.toDateString();
    if (!title)
        return;
    var newTodo = {
        id: date.getTime(),
        title: title,
        createdAt: createdAt,
        //completed: false 로 주고 fetch의 body에 ...newTodo만 넣어도 됨
    };
    fetch(API_URL, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(__assign(__assign({}, newTodo), { completed: false })),
    })
        .then(function (response) { return response.json(); })
        .then(function () {
        if (todoInputEl) {
            todoInputEl.value = "";
        }
        return fetch(API_URL);
    })
        .then(function (response) { return response.json(); })
        .then(function (data) { return renderTodo(data); });
};
var deleteTodo = function (todoId) {
    fetch(API_URL + "/" + todoId, {
        method: "DELETE",
    })
        .then(function () { return fetch(API_URL); })
        .then(function (response) { return response.json(); })
        .then(function (data) { return renderTodo(data); });
};
