const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");
const addBtn = document.getElementById("addBtn");

function addTask() {
  if (inputBox.value === "") {
    alert("YOu must write something!");
  } else {
    let li = document.createElement("li");
    li.innerHTML = inputBox.value;
    listContainer.appendChild(li);
    let span = document.createElement("span");
    span.innerHTML = "\u00d7";
    li.appendChild(span);
  }
  inputBox.value = "";
  saveData();
}

listContainer.addEventListener(
  "click",
  function (e) {
    if (e.target.tagName === "LI") {
      e.target.classList.toggle("checked");
      saveData();
    } else if (e.target.tagName === "SPAN") {
      e.target.parentElement.remove();
      saveData();
    }
  },
  false
);

addBtn.addEventListener("click",addTask);
inputBox.addEventListener("keypress", (event) => {
  if (event.key === "Enter") {
    addTask();
  }
});
function saveData() {
  localStorage.setItem("data", listContainer.innerHTML);
}

function display() {
  listContainer.innerHTML = localStorage.getItem("data");
}
display();















// const taskInput = document.getElementById("text-id");
// const addBtn = document.getElementById("add-btn");
// const taskList = document.getElementById("task-list");

// // Function to add new task

// addBtn.addEventListener("click", () => {
//   const tasktext = taskInput.value.trim();

//   // Only add the task  if the input is not empty
//   if (tasktext !== "") {
//     const taskItem = document.createElement("li");

//     // Create task text
//     const tasktextElement = document.createElement("span");
//     tasktextElement.textContent = tasktext;

//     const deleteBtn = document.createElement("button");
//     deleteBtn.textContent = "Delete";
//     deleteBtn.addEventListener("click", () => {
//       taskItem.remove();
//     });

//     // Add elements to the task item
//     taskItem.appendChild(tasktextElement);
//     taskItem.appendChild(deleteBtn);

//     taskList.appendChild(taskItem);

//     taskInput.value = "";
//   }
// });

// taskInput.addEventListener("keypress", (event) => {
//   if (event.key === "Enter") {
//     addBtn.click();
//   }
// });
