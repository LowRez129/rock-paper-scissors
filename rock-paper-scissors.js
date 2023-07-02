function computer_choice() {
    let choice = ["rock", "paper", "scissors"];
    let random = Math.floor(Math.random() * 3);
    return choice[random];
}

function outcome(player, computer) {
    console.log("Player: ", player, "Computer: ", computer);

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
    let computer = computer_choice();
    let player = this.value;
    let result = outcome(player,computer);
    switch (result) {
        case "win":
            player_score += 1;
        case "draw":
            break;
        case "lose":
            computer_score += 1;
    }
    console.log(player_score, " : ", computer_score);
}

var player_score = 0;
var computer_score = 0;

function huh(){
    let test = document.querySelectorAll("button");
    test = test.forEach(button => button.addEventListener("click", the_game));
}

huh();
