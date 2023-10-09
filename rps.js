//Declares global variables
let rounds = prompt("How many rounds do you want to play?","");
rounds = parseInt(rounds,10);

let wins = 0;
let losses = 0;
let ties = 0;

//Converts number value to name
function convertToWord(choice) {
    if (choice == 0) {
        return "rock";
    } else if (choice == 1) {
        return "paper";
    } else if (choice == 2) {
        return "scissors";
    }
}

//Defines the game
function rps() {
    let userChoice = prompt("Rock, paper, or scissors? (please type your response with r, p, or s)", "");
    let computerChoice = Math.floor(Math.random()*3)

    //Converts userChoice to integer
    if (userChoice == "r") {
        userChoice = 0;
    } else if (userChoice == "p") {
        userChoice = 1;
    }else if (userChoice == "s") {
        userChoice = 2;
    }else {
        alert("That's not a valid input.");
    }

    //Gameplay
    if (userChoice == computerChoice) {
        ties += 1;
        alert("It was a tie. Both players picked " + convertToWord(userChoice));
    } else if (userChoice > computerChoice && computerChoice != 0) {
        wins += 1;
        alert("You won! " + convertToWord(userChoice) + " is stronger than " + convertToWord(computerChoice));
    } else if (userChoice == 1 && computerChoice == 0) {
        wins += 1;
        alert("You won! " + convertToWord(userChoice) + " is stronger than " + convertToWord(computerChoice));
    } else if (userChoice == 0 && computerChoice == 2) {
        wins += 1;
        alert("You won! " + convertToWord(userChoice) + " is stronger than " + convertToWord(computerChoice)); 
    } else {
        losses += 1;
        alert("You lost. " + convertToWord(userChoice) + " is weaker than " + convertToWord(computerChoice));
    }
}

//Loops the game for however many rounds. Tallies results at end
if (rounds > 0) {
    for (i = 1; i <= rounds; i+= 1) {
        alert("Round " + i);
        rps();
    }
    alert("You won "+ wins + " time(s)." + "\nYou lost " + losses + " time(s)." + "\nYou tied " + ties + " time(s).");
}