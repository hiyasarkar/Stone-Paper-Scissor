let userScore = 0;
let compScore = 0;
const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");
const userScoreGrow = document.querySelector("#user-score");
const compScoreGrow = document.querySelector("#comp-score");
const drawGame = () => {
    msg.innerText = "Draw Game, play again!";
    msg.style.backgroundColor = "darkmagenta";
}

const showWinner = (userWin) => {
     if(userWin){
        userScore++;
        userScoreGrow.innerText = userScore;
        msg.innerText = "You win!"; 
        msg.style.backgroundColor = "green";
     } else {
        compScore++;
        compScoreGrow.innerText = compScore;
        msg.innerText = "You lose";
        msg.style.backgroundColor = "red";
     }
}


const gencompChoice = () => {
    const options = ["stone","paper","scissor"];
    const randIdx = Math.floor(Math.random()*3);
    return options [randIdx];
}

const playGame = (userChoice) => {
    
    const compChoice = gencompChoice ();
    
    if (userChoice === compChoice) {
        drawGame ();
    } else {
        let userWin = true;
        if(userChoice === "stone") {
            userWin = compChoice === "paper" ? false : true;
    } else if (userChoice === "paper") {
            userWin = compChoice === "scissor" ? false : true;
    } else {
        userWin = compChoice === "stone" ? false : true;
    }
    showWinner(userWin);
}
};

choices.forEach((choice)=> {
    choice.addEventListener("click", () => {
        const userChoice = choice.getAttribute("id");
        playGame(userChoice);
          });
})