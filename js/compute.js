function multiRound () {
    let i = 0;
    while (i < 3 ) {
            function computerPlay () { 
                const choices = ["Scissors", "Paper", "Rock"];
                const random = Math.floor(Math.random() * choices.length);
                return (random, choices[random]);
            }

            function playRound() {

                    console.log(playerSelection);
                    console.log(computerSelection);
                    if (playerSelection === computerSelection) {
                        return `It's a Tie! ${playerSelection} was chosen by both parties!`;
                    }
                    else if (playerSelection === "Rock") {
                        if (computerSelection === "Scissors") {
                            return `You win! ${playerSelection} defeats ${computerSelection}!`;
                            playerScore ++;
                    }
                        else if (computerSelection === "Paper") {
                            return `You lose! ${playerSelection} is defeated by ${computerSelection}!`;
                            cpuScore ++;
                        }
                    }
                    else if (playerSelection === "Paper") {
                        if (computerSelection === "Rock") {
                            return `You win! ${playerSelection} defeats ${computerSelection}!`;
                            playerScore ++;;
                    }
                        else if (computerSelection === "Scissors") {
                            return `You lose! ${playerSelection} is defeated by ${computerSelection}!`;
                            cpuScore ++;
                        }
                    }
                    else if (playerSelection === "Scissors") {
                        if (computerSelection === "Paper") {
                            return `You win! ${playerSelection} defeats ${computerSelection}!`;
                            playerScore ++;
                    }
                        else if (computerSelection === "Rock") {
                            return `You lose! ${playerSelection} is defeated by ${computerSelection}!`;
                            cpuScore ++;
                        }
                    }
                    else {
                        return "Invalid choice, try Scissors, Paper or Rock";
                    }
                }
    

        input = window.prompt('Scissors, Paper or Rock?');
        function capitalizeFirstLetter(string) {
            return string.charAt(0).toUpperCase() + string.slice(1);
        }
        const playerSelection = capitalizeFirstLetter(input);
        const computerSelection = computerPlay();
        console.log(playRound (playerSelection, computerSelection));
        i++;
    }

if (playerScore === cpuScore) {
    alert("It's a tie!")
    }
    else if (playerScore < cpuScore) {
        alert(`Suck it! I got ${cpuScore} and you only got ${playerScore} L O S E R!!!`);
    }
    else {
        alert(`You must be cheating, I only got ${cpuScore} and you got ${playerScore}?? How is that possible!?`)
    }
};

let playerScore = 0;
let cpuScore = 0;
multiRound ();