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
    score.textContent = `Player(${player}): ${player_score} Computer(${computer}): ${computer_score}`;
}

var player_score = 0;
var computer_score = 0;
var score = document.querySelector("#score");
score.textContent = `Player: ${player_score} Computer: ${computer_score}`;

function buttonPress(){
    let button_query = document.querySelectorAll("button");
    button_query = button_query.forEach(button => button.addEventListener("click", the_game));
}

buttonPress();
