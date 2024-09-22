const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");
const addBtn = document.getElementById("addBtn");

function addTask() {
  // Trim the input value to avoid empty spaces
  const taskValue = inputBox.value.trim();
  
  if (taskValue === "") {
    alert("You must write something!");
  } else {
    let li = document.createElement("li");
    li.innerHTML = taskValue;
    listContainer.appendChild(li);
    let span = document.createElement("span");
    span.innerHTML = "\u00d7"; // Create a delete button (×)
    li.appendChild(span);
  }
  inputBox.value = ""; // Clear the input box
  saveData(); // Save the task to local storage
}

listContainer.addEventListener("click", function (e) {
  if (e.target.tagName === "LI") {
    e.target.classList.toggle("checked");
    saveData();
  } else if (e.target.tagName === "SPAN") {
    e.target.parentElement.remove();
    saveData();
  }
}, false);

addBtn.addEventListener("click", addTask);
inputBox.addEventListener("keypress", (event) => {
  if (event.key === "Enter") {
    addTask();
  }
});

function saveData() {
  localStorage.setItem("data", listContainer.innerHTML);
}

function display() {
  listContainer.innerHTML = localStorage.getItem("data") || ""; // Set default to empty string
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
