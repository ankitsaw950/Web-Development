let userscore = 0;
let computerscore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");
const UserScorePara=document.querySelector("#user-score");
const ComputerScorePara=document.querySelector("#computer-score");

const GenarateComputerChoice = () => {
  //rock paper scissor
  const options = ["rock", "paper", "scissor"];
  const randomChoice = Math.floor(Math.random() * 3);
  return options[randomChoice];
};

const drawGame = () => {
  // console.log("Game was draw");
  msg.innerText = "Game was Draw";
  msg.style.backgroundColor = "brown";
};

const showWinner = (userWin,userchoice,computerchoice) => {
  if (userWin) {
    userscore++;
    UserScorePara.innerText=userscore;
    console.log("You win");
    msg.innerText = `You Win! User's ${userchoice}  beats ${computerchoice}`;
    msg.style.backgroundColor = "green";
  } else {
    computerscore++;
    ComputerScorePara.innerText = computerscore;
    console.log("You loose");
    msg.innerText = `You Loose ! Computer's ${computerchoice}  beats  ${userchoice}`;
    msg.style.backgroundColor = "red";
  }
};

const playgame = (userchoice) => {
  console.log("User choice =", userchoice);
  //generating the computer choice
  const computerchoice = GenarateComputerChoice();
  console.log("Computer choice =", computerchoice);
  if (userchoice === computerchoice) {
    drawGame();
  } else {
    let userWin = true;
    if (userchoice === "rock") {
      //scissor,paper
      userWin = computerchoice === "paper" ? false : true;
    } else if (userchoice === "paper") {
      //rock,scissor
      userWin = computerchoice === "scissor" ? false : true;
    } else {
      //rock,paper
      userWin = computerchoice === "rock" ? false : true;
    }
    showWinner(userWin,userchoice,computerchoice);
  }
};

choices.forEach((choice) => {
  choice.addEventListener("click", () => {
    const userchoice = choice.getAttribute("id");
    playgame(userchoice);
  });
});
