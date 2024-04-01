let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");

const userScorePara = document.querySelector("#user-score");
const compScorePara = document.querySelector("#comp-score");

const genCompChoice = () => {
    const options = ["rock", "paper", "scissors"];
    const randIdk = Math.floor(Math.random() * 3);
    return options[randIdk];
    //rock, paper, scessor

};
const drawGame = () => {
    msg.innerText = "Game was draw. play again.";
    msg.style.backgroundcolor = "#081b31";
};
const showWinner = (userWin, userChoice, compChoice) => {
    if(userWin) {
        userScore++;
        userScorePara.innerText = userScore;
        msg.innerText = `You win! your ${userChoice} beats ${compChoice}`;
        msg.style.backgroundcolor = "green";
    } else {
        compScore++;
        compScorePara.innerText = compScore;
        msg.innerText =`You lose! ${compChoice} beats your ${userChoice}`;
        msg.style.backgroundcolor = "red";
    }
};

const playGame = (userChoice) => {
    //generate computer choice 
    const compChoice = genCompChoice();
    if(userChoice === compChoice) {
        drawGame();
    } else {
        let userWin = true;
        if(userChoice === "rock"){
            userWin = compChoice === "paper" ? false : true;
        } else if(userChoice === "paper"){
            userWin = compChoice === "scissors" ? fase :true;
        } else {
            userWin = compChoice === "rock" ? false : true;
        }
        showWinner(userWin, userChoice, compChoice );
    }
};

choices.forEach((choice) => {
    console.log(choice);
    choice.addEventListener("click", () => {
        const userChoice = choice.getAttribute("id");
        //console.log("choice was clicked!",userChoice);
        playGame(userChoice);
    });
}); 