        
        function getComputerChoice(){
            let choice;
            let randomNumber = Math.floor(Math.random()*(3)) + 1;
            if(randomNumber == 1){
                choice = 'ROCK';
            }else if(randomNumber == 2){
                choice = 'PAPER';
            }
            else{
                choice = 'SCISSORS';
            }
            console.log("//// COMPUTER CHOSE " + choice);
            return choice;
        }

        function getChoice(){
            let playerChoice;
            let condition = false;

            if(condition) return playerChoice;
        }
        

        function round(persChoice, compChoice){
            let whoWins; // 0 -> computer, 1 -> person, 2 -> tie

            if(persChoice === compChoice){
                whoWins = 2;
            }else if((persChoice === 'ROCK' && compChoice === 'SCISSORS') || (persChoice === 'PAPER' && compChoice === 'ROCK') || (persChoice === 'SCISSORS' && compChoice === 'PAPER')){
                whoWins = 1;
            }else{
                whoWins = 0;
            }
            return whoWins;
        }


function gameIt(playerChoice){
    if(computerWins < 5 && personWins <5){
        let computerChoice = getComputerChoice();
        winner = round(playerChoice, computerChoice);
        if(winner == 0){
            computerWins = computerWins + 1;
            winnerDOM.textContent = "THE COMPUTER";
        }
        else if(winner == 1){
            personWins = personWins +1
            winnerDOM.textContent = "YOU";
        }
        else{
            winnerDOM.textContent = "TIE!";
        }

        computerCounterDOM.textContent = computerWins.toString();
        personCounterDOM.textContent = personWins.toString() 
        personPickDOM.textContent = playerChoice.toString();
        computerPickDOM.textContent = computerChoice.toString();

        if(computerWins == 5){
            alert("YOU LOST!");
        }
        else if(personWins == 5){
            alert("CONGRATULATIONS! YOU WON!!!!");
        }

        }
}


const computerCounterDOM = document.querySelector('#computerCounter');
const personCounterDOM = document.querySelector('#personCounter');
const rockDOM = document.querySelector('#rock');
const paperDOM = document.querySelector('#paper');
const scissorsDOM = document.querySelector('#scissors');
const indicatorDOM = document.querySelector('#indicator');
const personPickDOM = document.querySelector('#personPick');
const computerPickDOM = document.querySelector('#computerPick');
const winnerDOM = document.querySelector('#winner');
const resetButtonDOM = document.querySelector("#resetButton");

let computerWins = 0, personWins = 0;
computerCounterDOM.textContent = computerWins.toString();
personCounterDOM.textContent = personWins.toString();


rockDOM.addEventListener('mouseover', () => {
    indicatorDOM.textContent = "Rock"
})

paperDOM.addEventListener('mouseover', () => {
   indicatorDOM.textContent = "Paper" 
})

scissorsDOM.addEventListener('mouseover', () => {
    indicatorDOM.textContent = "Scissors"
})

rockDOM.addEventListener('click', () => {
    gameIt("ROCK");
})

paperDOM.addEventListener('click', () => {
    gameIt("PAPER");
})

scissorsDOM.addEventListener('click', () => {
    gameIt("SCISSORS");
})

resetButtonDOM.addEventListener('click', () => {
    computerWins = 0;
    personWins = 0;

    computerCounterDOM.textContent = computerWins.toString();
    personCounterDOM.textContent = personWins.toString() 
    personPickDOM.textContent = "";
    computerPickDOM.textContent = "";
    winnerDOM.textContent = "";
    indicatorDOM.textContent = ""
})
