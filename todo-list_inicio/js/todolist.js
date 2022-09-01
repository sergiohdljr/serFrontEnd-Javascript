(function () {
  "use strict";

  // ARMAZENAR O DOM EM VARIAVEIS
  const itemInput = document.getElementById("item-input");
  const todoAddForm = document.getElementById("todo-add");
  const ul = document.getElementById("todo-list");
  // const lis = ul.getElementsByTagName("li")

  let arrTasks = [
    {
      name: "task 1",
      createAt: Date.now(),
      completed: false,
    },
  ];

  function addEventLi(li) {
    li.addEventListener("click", function () {
      console.log(this);
    });
  }

  function generateLiTask(obj) {
    
    const li = document.createElement("li");
    const p = document.createElement("p");
    const checkButton = document.createElement("button")
    const editButton = document.createElement("i");
    const deleteButton = document.createElement("i")

    li.className = "todo-item";
    p.className = "task-name";
    checkButton.className = "button-check";
    checkButton.innerHTML = '<i class = "fas fa-check displayNone"></i>'

    li.appendChild(checkButton)

    p.textContent = obj.name;
    li.appendChild(p);

    editButton.className = "fas fa-edit"
    li.appendChild(editButton)

    deleteButton.className = "fas fa-trash-alt"
    li.appendChild(deleteButton)

    addEventLi(li);
    return li;
  }

  function renderTasks() {
    ul.innerHTML = "";
    arrTasks.forEach((taskObj) => {
      ul.appendChild(generateLiTask(taskObj))
    });
  }

  function addTask(task) {
    arrTasks.push({
      name: task,
      createAt: Date.now(),
      completed: false,
    });
  }

  todoAddForm.addEventListener("submit", function (e) {
    e.preventDefault();
    addTask(itemInput.value);
    renderTasks()
    itemInput.value = "";
    itemInput.focus();
  });

  renderTasks()
  
})();
