function computer_choice() {
    let choice = ["rock", "paper", "scissors"];
    let random = Math.floor(Math.random() * 3);
    return choice[random];
}

function outcome(player, computer) {
    switch (computer) {
        case player:
            return "draw";
        case "rock":
            switch (player) {
                case "paper":
                    return "win";
                case "scissors":
                    return "lose";
            }
        case "paper":
            switch (player) {
                case "rock":
                    return "lose";
                case "scissors":
                    return "win";
            }
        case "scissors":
            switch (player) {
                case "rock":
                    return "win";
                case "paper":
                    return "lose";
            }
    }
    
}
 
function the_game(){    
    if (player_score == 5 || computer_score == 5){
      return;   
    }

    let computer = computer_choice();
    let player = this.value;
    let result = outcome(player,computer);

    switch (result) {
        case "win":
            player_score += 1;
        case "draw":
            break
        case "lose":
            computer_score += 1;
    }
    score1.textContent = `${player_score}`;
    score2.textContent = `${computer_score}`;
    choice1.textContent = `${player}`;
    choice2.textContent = `${computer}`;
    footer.textContent = `${result}`;

    if (player_score == 5) {
        return footer.textContent = "YOU WON";
    }
    else if (computer_score == 5) {
        return footer.textContent = "YOU LOSE";
    }
}

var player_score = 0;
var computer_score = 0;
var score1 = document.querySelector("#score .player");
var score2 = document.querySelector("#score .computer");
var choice1 = document.querySelector("#choice .player-choice");
var choice2 = document.querySelector("#choice .computer-choice");
var footer = document.querySelector("#footer");

function buttonPress(){
    let button_query = document.querySelectorAll("#score button");
    button_query = button_query.forEach(button => button.addEventListener("click", the_game));
}

buttonPress();
