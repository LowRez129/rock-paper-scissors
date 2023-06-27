function computer_choice() {
    let choice = ["rock", "paper", "scissors"];
    let random = Math.floor(Math.random() * 3);
    return choice[random];
}

function player_choice() {
    let choice = prompt();

    choice = choice.toLowerCase();
    return choice;
}

function rock(computer) {
    switch (computer) {
        case "rock":
            console.log("DRAW");
            break;
        case "paper":
            console.log("LOSE");
            break;
        case "scissors":
            console.log("WIN");
            break;
    }
}

function paper(computer) {
    switch (computer) {
        case "rock":
            console.log("WIN");
            break;
        case "paper":
            console.log("DRAW");
            break;
        case "scissors":
            console.log("LOSE");
            break;
    }
}

function scissors(computer) {
    switch (computer) {
        case "rock":
            console.log("LOSE");
            break;
        case "paper":
            console.log("WIN");
            break;
        case "scissors":
            console.log("DRAW");
            break;
    }
}

function outcome(player, computer) {
    /*
        rock = rock
        rock < paper
        rock > scissors

        paper = paper
        paper < scissors
        paper > rock

        scissors = scissors
        scissors < rock
        scissors > paper
        
    */
    let victory = false;
    console.log("Player: ", player, "Computer: ", computer);

    switch (player) {
        case "rock":
            victory = rock(computer);
            break;

        case "paper":
            victory = paper(computer);
            break;
        
        case "scissors":
            victory = scissors(computer);
            break;
    }
    let player_score = 0;
    let computer_score = 0;

    switch (victory) {
        case true:
            player_score += 1;
        case false:
            computer_score += 1;
    }
    
}

function the_game(){
    for (let i = 0; i < 5; i++) {
        let computer = computer_choice();
        let player = player_choice();
        outcome(player,computer)
    }
}

the_game();
