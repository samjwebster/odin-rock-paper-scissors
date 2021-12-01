const rock = document.querySelector('#rock');

const paper = document.querySelector('#paper');

const scissors = document.querySelector('#scissors');


const userCont = document.querySelector("#user-choice");

const computerCont = document.querySelector("#computer-choice");

const uScoreText = document.querySelector("#user-score");

const cScoreText = document.querySelector("#computer-score");

let userScore = 0;
let computerScore = 0;

function iconPath(rps) {
    switch (rps) {
        case 'r':
            return '/rock.jpg';
        case 'p':
            return '/paper.png';
        case 's':
            return '/scissors.png';
    }
}

function computerPlay() {
    let options = ['r','p','s'];
    return options[Math.floor(Math.random() * 3)];
}

function playRound(choice) {
    let computerChoice = computerPlay();

    if (userCont.childElementCount < 2) {
        let userIcon = document.createElement('img');
        let computerIcon = document.createElement('img');
        userIcon.classList.add('icon');
        userIcon.id = 'userIcon';
        computerIcon.classList.add('icon');
        computerIcon.id = 'computerIcon';
        userIcon.src = iconPath(choice);
        computerIcon.src = iconPath(computerChoice);
        userCont.appendChild(userIcon);
        computerCont.appendChild(computerIcon);
    } else {
        let userIcon = document.getElementById('userIcon');
        let computerIcon = document.getElementById('computerIcon');
        userIcon.src = iconPath(choice);
        computerIcon.src = iconPath(computerChoice);
    }
    
    switch (choice) {
        case 'r':
            switch (computerChoice) {
                case 'r':
                    outcome(1);
                    break;
                case 'p':
                    outcome(2);
                    computerScore++;
                    break;
                case 's':
                    outcome(3);
                    userScore++;
                    break;
            }
            break;
        case 'p':
            switch (computerChoice) {
                case 'r':
                    outcome(4);
                    userScore++;
                    break;
                case 'p':
                    outcome(5);
                    break;
                case 's':
                    outcome(6);
                    computerScore++;
                    break;
            }
            break;
        case 's':
                switch (computerChoice) {
                case 'r':
                    outcome(7);
                    computerScore++;
                    break;
                case 'p':
                    outcome(8);
                    userScore++;
                    break;
                case 's':
                    outcome(9);
                    break;
            }
            break;
    } // end of switches

    uScoreText.textContent = "You: " + userScore;
    cScoreText.textContent = "Computer: " + computerScore;



    return;
}

const textCont = document.querySelector("#text-container");


function outcome(num) {

    if (textCont.childElementCount < 1) {
        let resultText = document.createElement('em');
        resultText.id = 'resultText';
        resultText.classList.add('text');
        textCont.appendChild(resultText);
    } 
    let resultText = document.getElementById('resultText');

    switch (num) {
        case 1:
            resultText.textContent="With a loud thud, both of rocks bounce off each other in opposite directions.";
            break;
        case 2:
            resultText.textContent="Their paper constricts your rock effortlessly - a simplistic loss.";
            break;
        case 3:
            resultText.textContent="Your rock’s innate hardness stops the scissor’s sharp jaw in its tracks.";
            break;
        case 4:
            resultText.textContent="The flat face of your paper suffocates the rock beneath its surface for a silent and remorseless victory.";
            break;
        case 5:
            resultText.textContent="In a remarkably uneventful spar, the sheets of paper rest against each other in an infinite stalemate.";
            break;
        case 6:
            resultText.textContent="Their scissors’ blade leaves your paper separated in two - utterly lifeless.";
            break;
        case 7:
            resultText.textContent="Their rock smashes your scissors’ hinge without remorse.";
            break;
        case 8:
            resultText.textContent="Your razor-sharp scissor edge slices through their paper with ferocity.";
            break;
        case 9:
            resultText.textContent="Your metal scissors clang together with equal power; a forceful draw is reached.";
            break;
    }
    return;
}