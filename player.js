class Player {
    constructor(name, token) {
        this.name = name
        this.token = token
        this.wins = 0
    };

    takeTurn(move) {
        if (move === "rock") {
            currentGame.humanMove = "rock";
        } else if (move === "paper") {
            currentGame.humanMove = "paper";
        } else {
            currentGame.humanMove = "scissors";
        };
        
        currentGame.checkWinner();
    };

    // takeTurn(event) {
    //     if (event.target.dataSet.move === "rock") {
    //         currentGame.humanMove = "rock";
    //     } else if (event.target.dataSet.move === "paper") {
    //         currentGame.humanMove = "paper";
    //     } else {
    //         currentGame.humanMove = "scissors";
    //     };
    //     currentGame.checkWinner();
    // };

};