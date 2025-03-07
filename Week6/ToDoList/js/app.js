// elementleri seçmek için querySelector kullanıldı.

const addInput = document.querySelector("#task");

const todoList = document.querySelector("#list");

const addPopup = document.querySelector("#liveToastBtn");

const showPopup = document.querySelector(".header");

// bootsrap toast için deneme
const showToast = document.querySelector("#liveToast");

let todos = [];
 

  
runEvents();

function runEvents() {
  addPopup.addEventListener("click", addTask);
  todoList.addEventListener("click", removeTask);
}

function addTask(e) {
  e.preventDefault(); // Move this to the beginning

  const inputText = addInput.value.trim();

  if (inputText == "" || inputText == null) {
    alert("Please add a task");
  } else {
    // arayuze ekleme yapılacak
    addTaskUI(inputText);

    // local storage ekleme yapılacak
    addTaskLocalStorage(inputText);
  }
}

function addTaskUI(newTodo) {

  const li = document.createElement("li");

  //li.className ="list-group-item d-flex justify-content-between align-items-center";

  li.textContent = newTodo;


  const a = document.createElement("a");

  a.href = "#";
  a.className = "badge badge-danger badge-pill";
  a.textContent = "X";
  //a.style.color = "white";
  //a.style.backgroundColor = "red";
  //a.style.padding = "5px";

  li.appendChild(a);
  todoList.appendChild(li);
  addInput.value = "";

}

function addTaskLocalStorage(newTodo) {
  let todos = getTasksFromLocalStorage();
  todos.push(newTodo);
  localStorage.setItem("todos", JSON.stringify(todos));
}

function getTasksFromLocalStorage() {
  let todos;
  if (localStorage.getItem("todos") === null) {
    todos = [];
  } else {
    todos = JSON.parse(localStorage.getItem("todos"));
  }
  return todos;
}

function removeTask(e) {
  if (e.target.classList.contains("badge-danger")) {
    e.target.parentElement.remove();
    removeTaskFromLocalStorage(e.target.parentElement.textContent);
  }
}

function removeTaskFromLocalStorage(task) {
  let todos = getTasksFromLocalStorage();
  todos = todos.filter(todo => todo !== task.slice(0, -1));
  localStorage.setItem("todos", JSON.stringify(todos));
}

