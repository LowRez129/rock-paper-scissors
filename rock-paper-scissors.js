function computer_choice() {
    let choice = ["rock", "paper", "scissors"];
    let random = Math.floor(Math.random() * 3);
    return choice[random];
}

function player_choice() {
   return prompt().toLowerCase();
}

function the_game(player, computer) {
    switch (player) {
        case computer[0]:
    }
    console.log(computer, player);
}

for (let i = 0; i < 5; i++) {
    let computer = computer_choice();
    let player = player_choice();
    let test = the_game(player,computer)
}