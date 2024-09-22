// Selecting necessary elements
let boxes = document.querySelectorAll(".box");
let resetBtn = document.querySelector("#reset-button");
let newbutton = document.querySelector("#newbutton");
let msgContainer = document.querySelector(".msg-container");
let msg = document.querySelector("#msg");
let nameForm = document.querySelector("#name-form");
let playerOInput = document.querySelector("#playerO");
let playerXInput = document.querySelector("#playerX");
let container = document.querySelector(".container");

let turnO = true; // Variable to track whose turn it is
let playerOName = ''; // Variable to store Player O's name
let playerXName = ''; // Variable to store Player X's name

// Winning patterns for Tic-Tac-Toe
const winning = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [3, 4, 5],
    [6, 7, 8],
];

// Function to reset the game
const resetGame = () => {
    turnO = true;
    enableBoxes();
    msgContainer.classList.add("hide");
    nameForm.classList.remove("hide");
    container.classList.add("hide");
    resetBtn.classList.add("hide");
};

// Function to start the game after entering names
nameForm.addEventListener("submit", (e) => {
    e.preventDefault(); // Prevent form submission
    playerOName = playerOInput.value; // Get Player O's name
    playerXName = playerXInput.value; // Get Player X's name
    nameForm.classList.add("hide"); // Hide the form
    container.classList.remove("hide"); // Show the game board
    resetBtn.classList.remove("hide"); // Show the reset button
});

// Adding click event listeners to each box
boxes.forEach((box) => {
    box.addEventListener("click", () => {
        if (turnO) {
            box.innerText = "O"; // Player O's turn
            turnO = false;
        } else {
            box.innerText = "X"; // Player X's turn
            turnO = true;
        }
        box.disabled = true; // Disable the box after it's clicked
        checkWinner(); // Check for a winner
    });
});

// Function to disable all boxes
const disableBoxes = () => {
    for (let box of boxes) {
        box.disabled = true; // Disable each box
    }
};

// Function to enable all boxes and clear text
const enableBoxes = () => {
    for (let box of boxes) {
        box.disabled = false; // Enable each box
        box.innerText = ""; // Clear the text
    }
};

// Function to show the winner
const showWinner = (winner) => {
    let winnerName = winner === 'O' ? playerOName : playerXName; // Determine winner's name
    msg.innerText = `Congratulations, ${winnerName} wins!`; // Display winner message
    msgContainer.classList.remove("hide"); // Show the message container
    disableBoxes(); // Disable all boxes
};

// Function to check for a winner or a draw
const checkWinner = () => {
    for (let pattern of winning) {
        let posval1 = boxes[pattern[0]].innerText;
        let posval2 = boxes[pattern[1]].innerText;
        let posval3 = boxes[pattern[2]].innerText;

        if (posval1 != "" && posval2 != "" && posval3 != "") {
            if (posval1 === posval2 && posval2 === posval3) {
                showWinner(posval1); // If a winning pattern is found
                return;
            }
        }
    }

    let isDraw = Array.from(boxes).every(box => box.innerText !== "");
    if (isDraw) {
        msg.innerText = "It's a Draw!"; // Display draw message
        msgContainer.classList.remove("hide"); // Show the message container
    }
};

// Event listeners for reset and new game buttons
newbutton.addEventListener("click", resetGame);
resetBtn.addEventListener("click", resetGame);
