const rock = document.querySelector('#rock');
rock.addEventListener('click', playRound('r'))

const paper = document.querySelector('#paper');
paper.addEventListener('click', playRound('p'))

const scissors = document.querySelector('#scissors');
scissors.addEventListener('click', playRound('s'))




playRound(choice) {


}




function computerPlay() {
    let options = ["Rock", "Paper", "Scissors"];
    return options[Math.floor(Math.random() * 3)];
}

function userPlay (uScore, cScore) {
    let options = ["Rock", "Paper", "Scissors"];
    return options[prompt("User Score: " + uScore + " - Computer Score: " + cScore + "\nEnter your choice: \n 1. Rock - 2. Paper - 3. Scissors")-1];
}

function outcome(num, uChoice, compChoice) {
    switch (num) {
        case 1:
            console.log("Win! " + uChoice + " beats " + compChoice + "!");
            break;
        case 2:
            console.log("Lose! " + compChoice + " beats " + uChoice + "!");
            break;
        case 3:
            console.log("Draw!");
            break;
    }
}

function game( rounds ) {
    console.log("Rock Paper Scissors! Best of " + rounds)
    let userScore = 0;
    let computerScore = 0;

    for( let i = 1; i <= rounds; i++) {
        if (i != 1) {
            console.log("User: " + userScore + " - Computer: " + computerScore);
        }
        let computer = computerPlay();
        let user = userPlay(userScore, computerScore);
        console.log("You played: " + user + " - Computer played: " + computer);
            switch (user) {
                case "Rock":
                    switch (computer) {
                        case "Rock":
                            outcome(3, user, computer);
                            i--;
                            break;
                        case "Paper":
                            outcome(2, user, computer);
                            computerScore++;
                            break;
                        case "Scissors":
                            outcome(1, user, computer);
                            userScore++;
                            break;
                    }
                    break;
                case "Paper":
                    switch (computer) {
                        case "Rock":
                            outcome(1, user, computer);
                            userScore++;
                            break;
                        case "Paper":
                            outcome(3, user, computer);
                            i--;
                            break;
                        case "Scissors":
                            outcome(2, user, computer);
                            computerScore++;
                            break;
                    }
                    break;
                case "Scissors":
                        switch (computer) {
                        case "Rock":
                            outcome(2, user, computer);
                            computerScore++;
                            break;
                        case "Paper":
                            outcome(1, user, computer);
                            userScore++;
                            break;
                        case "Scissors":
                            outcome(3, user, computer);
                            i--;
                            break;
                    }
                    break;
            } // end of switches
        if (userScore > (rounds/2)) {
            alert("You Win!\nFinal Score: User: " + userScore + " - Computer: " + computerScore);
            return;
        } else if (computerScore > (rounds/2)) {
            alert("You Lose!\nFinal Score: User: " + userScore + " - Computer: " + computerScore);
            return;
        }
    } // end of for loop
}