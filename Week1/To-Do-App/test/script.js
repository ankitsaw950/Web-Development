const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");
const addBtn = document.getElementById("addBtn");
const historySection = document.getElementById("history-section");
const historyTasks = document.getElementById("history-tasks");
const historyDate = document.getElementById("history-date");
const viewHistoryBtn = document.getElementById("view-history-btn");
const displayDate = document.getElementById("display-date");

// List of quotes to be shown randomly each day
const quotes = [
  "“The best time to plant a tree was 20 years ago. The second best time is now.”",
  "“Success is not final, failure is not fatal: it is the courage to continue that counts.”",
  "“Do what you can, with what you have, where you are.”",
  "“Keep your eyes on the stars and your feet on the ground.”",
];

// Display the current date and a daily quote only if it's the user's first visit
function displayDateAndQuote() {
  const now = new Date();
  const dateStr = now.toLocaleDateString();
  
  // Check if the quote has been shown today
  const lastVisitDate = localStorage.getItem("last-visit-date");

  if (!lastVisitDate || lastVisitDate !== dateStr) {
    const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
    document.getElementById("current-date").textContent = dateStr;
    document.getElementById("daily-quote").textContent = randomQuote;
    document.getElementById("date-quote-section").classList.remove("hidden");

    // Save the date of last visit to localStorage
    localStorage.setItem("last-visit-date", dateStr);
    localStorage.setItem("daily-quote", randomQuote);
  }

  displayDate.textContent = dateStr;  // Set the display date for tasks
}

// Load tasks for the current date
window.onload = function () {
  displayDateAndQuote();
  displayTasks();
};

// Add a new task
function addTask() {
  if (inputBox.value === "") {
    alert("You must write something!");
  } else {
    let li = document.createElement("li");
    li.innerHTML = inputBox.value;
    listContainer.appendChild(li);

    // Create a span element for the delete button
    let span = document.createElement("span");
    span.innerHTML = "\u00d7"; // Cross symbol
    li.appendChild(span);
  }
  inputBox.value = "";
  saveData();
}

// Save the current task list to localStorage
function saveData() {
  const now = new Date();
  const dateStr = now.toLocaleDateString();
  
  // Save today's tasks
  localStorage.setItem("tasks-" + dateStr, listContainer.innerHTML);

  // Save current tasks for persistence
  localStorage.setItem("tasks", listContainer.innerHTML);
}

// Display tasks from localStorage (current day)
function displayTasks() {
  listContainer.innerHTML = localStorage.getItem("tasks") || "";
}

// Handle task click (mark as done or delete)
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

// View task history based on the selected date
viewHistoryBtn.addEventListener("click", function () {
  const selectedDate = historyDate.value;

  if (selectedDate) {
    const formattedDate = new Date(selectedDate).toLocaleDateString();
    const historyData = localStorage.getItem("tasks-" + formattedDate);

    if (historyData) {
      historyTasks.innerHTML = historyData;
    } else {
      historyTasks.innerHTML = "<li>No tasks found for this date.</li>";
    }
  } else {
    alert("Please select a date to view history.");
  }
});

// Add event listener for adding tasks on button click and Enter key
addBtn.addEventListener("click", addTask);
inputBox.addEventListener("keypress", (event) => {
  if (event.key === "Enter") {
    addTask();
  }
});
