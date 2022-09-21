class Game {
    constructor(humanPlayer, computerPlayer) {
        this.players = [humanPlayer, computerPlayer]
        this.gameType = null
        this.humanMove = null
        this.computerMove = null
        this.basicMoves = ["rock", "paper", "scissors"];
    };

    checkWinner() {
        this.computerMove = this.basicMoves[Math.floor(Math.random() * this.basicMoves.length)]

        if (this.humanMove === this.computerMove) {
            this.announceDraw()
        } else if (this.humanMove === "rock" && this.computerMove === "paper") {
            //announce computer winner
            this.players[1].wins++;
        } else if (this.humanMove === "rock" && this.computerMove === "scissors") {
            //announce human winner
            this.players[0].wins++;
        } else if (this.humanMove === "paper" && this.computerMove === "rock") {
            //announce human winner
            this.players[0].wins++;
        } else if (this.humanMove === "paper" && this.computerMove === "scissors") {
            //announce computer winner
            this.players[1].wins++;
        } else if (this.humanMove === "scissors" && this.computerMove === "rock") {
            //announce computer winner
            this.players[1].wins++;
        } else if (this.humanMove === "scissors" && this.computerMove === "paper") {
            //announce human winner
            this.players[0].wins++;
        };
    }

    announceDraw() {
        //alert draw
        this.startNewGame();
    };

    startNewGame() {
        //reset DOM
    };


};