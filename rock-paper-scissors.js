function computer_choice() {
    let choice = ["rock", "paper", "scissors"];
    let random = Math.floor(Math.random() * 3);
    return choice[random];
}

function rock(computer) {
    switch (computer) {
        case "rock":
            console.log("DRAW");
            return 1;
        case "paper":
            console.log("LOSE");
            return 2;
        case "scissors":
            console.log("WIN");
            return 0;
    }
}

function paper(computer) {
    switch (computer) {
        case "rock":
            console.log("WIN");
            return 0;
        case "paper":
            console.log("DRAW");
            return 1;
        case "scissors":
            console.log("LOSE");
            return 2;
    }
}

function scissors(computer) {
    switch (computer) {
        case "rock":
            console.log("LOSE");
            return 2;
        case "paper":
            console.log("WIN");
            return 0;
        case "scissors":
            console.log("DRAW");
            return 1;
    }
}

function outcome(player, computer) {
    console.log("Player: ", player, "Computer: ", computer);

    switch (player) {
        case "rock":
            return rock(computer);

        case "paper":
            return paper(computer);
        
        case "scissors":
            return scissors(computer);

    }
}

function the_game(){
    let computer = computer_choice();
    let player = this.value;
    let result = outcome(player,computer);
    switch (result) {
        case 0:
            console.log("YOU WIN")
            break;
        case 1:
            console.log("DRAW")
            break;
        case 2:
            console.log("YOU LOSE")

    }
}

function huh(){
    function what() {
        console.log(this.value);
    }
    let test = document.querySelectorAll("button");
    test = test.forEach(button => button.addEventListener("click", the_game));
}

huh();
//the_game();
