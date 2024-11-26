const todoListEl = document.getElementById("todoList") as HTMLInputElement;
const todoInputEl = document.getElementById("todoInput") as HTMLInputElement;

const API_URL = "http://localhost:3000/todos";

//Todo 인터페이스 만들기0
interface ToDo {
  id: number;
  title: string;
  createdAt: string;
  completed: boolean;
}

fetch(API_URL)
  .then((response) => response.json())
  .then((data) => renderTodo(data))
  .catch((error) => console.log("error: " + error));

const fetchTodos = async (): Promise<ToDo[]> => {
  const response = await fetch(API_URL);
  return await response.json();
};

//post 요청
const fetchPost = async (newToDo: ToDo): Promise<ToDo[]> => {
  return await fetch(API_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ ...newToDo }),
  }).then((response) => response.json());
};
const fetchDelete = (todoId: number): Promise<Response> => {
  return fetch(API_URL + "/" + todoId, {
    method: "DELETE",
  });
};

//patㅊh
const fetchPatch = (todoId: number, newTitle: string): Promise<Response> => {
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
const renderTodo = (newTodos: ToDo[]): void => {
  if (!todoListEl) return;
  todoListEl.innerHTML = "";
  newTodos.forEach((todo: ToDo) => {
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
const addTodo = (): void => {
  if (todoInputEl == null) return;
  const title = todoInputEl.value;
  const date = new Date();
  const createdAt = date.toDateString();

  if (!title) return;
  //Omit <Todo,"completed"> => 그냥 개념만 알고 가기 ㅇㅇ
  const newTodo: ToDo = {
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

const deleteTodo = (todoId: number): void => {
  if (todoId == null) return;

  fetchDelete(todoId)
    .then(() => fetchTodos())
    .then((data) => renderTodo(data));
};

const updateTodo = (todoId: number, title: string): void => {
  //id에 해당하는 아이템 불러옴
  const todoItem = document.querySelector(`#todo-${todoId}`) as HTMLElement;
  if (!todoItem) return;
  todoItem.innerHTML = "";

  const updateInput = document.createElement("input");
  updateInput.type = "text";
  updateInput.value = title;
  todoItem.append(updateInput);

  const updateTodoItem = (event: { key: string }) => {
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
const updateToDoTitle = (
  todoId: number,
  newTitle: string
): Promise<Response> => {
  if (!newTitle) return Promise.reject(new Error("title cannot be empty"));
  return fetchPatch(todoId, newTitle);
};
