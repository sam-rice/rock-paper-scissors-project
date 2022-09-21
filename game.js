class Game {
  constructor(humanPlayer, computerPlayer) {
    this.players = [humanPlayer, computerPlayer]
    this.gameType = null
    this.humanMove = null
    this.computerMove = null
    this.basicMoves = ["rock", "paper", "scissors"];
    this.advancedMoves = ["rock", "paper", "scissors", "ghost", "lizard"];
  };

  checkWinner() {
    this.makeCompMove();
    if (this.humanMove === this.computerMove) {
      announceDraw();
    } else if (this.humanMove === "rock" && this.computerMove === "paper") {
      announceCompWinner();
      this.players[1].wins++;
    } else if (this.humanMove === "rock" && this.computerMove === "scissors") {
      announceUserWinner();
      this.players[0].wins++;
    } else if (this.humanMove === "rock" && this.computerMove === "ghost") {
      announceCompWinner();
      this.players[1].wins++;
    } else if (this.humanMove === "rock" && this.computerMove === "lizard") {
      announceUserWinner();
      this.players[0].wins++;
    } else if (this.humanMove === "paper" && this.computerMove === "rock") {
      announceUserWinner();
      this.players[0].wins++;
    } else if (this.humanMove === "paper" && this.computerMove === "scissors") {
      announceCompWinner();
      this.players[1].wins++;
    } else if (this.humanMove === "paper" && this.computerMove === "ghost") {
      announceUserWinner();
      this.players[0].wins++;
    } else if (this.humanMove === "paper" && this.computerMove === "lizard") {
      announceCompWinner();
      this.players[1].wins++;
    } else if (this.humanMove === "scissors" && this.computerMove === "rock") {
      announceCompWinner();
      this.players[1].wins++;
    } else if (this.humanMove === "scissors" && this.computerMove === "paper") {
      announceUserWinner();
      this.players[0].wins++;
    } else if (this.humanMove === "scissors" && this.computerMove === "ghost") {
      announceCompWinner();
      this.players[1].wins++;
    } else if (this.humanMove === "scissors" && this.computerMove === "lizard") {
      announceUserWinner();
      this.players[0].wins++;
    } else if (this.humanMove === "lizard" && this.computerMove === "rock") {
      announceCompWinner();
      this.players[1].wins++;
    } else if (this.humanMove === "lizard" && this.computerMove === "paper") {
      announceUserWinner();
      this.players[0].wins++;
    } else if (this.humanMove === "lizard" && this.computerMove === "scissors") {
      announceCompWinner();
      this.players[1].wins++;
    } else if (this.humanMove === "lizard" && this.computerMove === "ghost") {
      announceUserWinner();
      this.players[0].wins++;
    } else if (this.humanMove === "ghost" && this.computerMove === "rock") {
      announceUserWinner();
      this.players[0].wins++;
    } else if (this.humanMove === "ghost" && this.computerMove === "paper") {
      announceCompWinner();
      this.players[1].wins++;
    } else if (this.humanMove === "ghost" && this.computerMove === "scissors") {
      announceUserWinner();
      this.players[0].wins++;
    } else if (this.humanMove === "ghost" && this.computerMove === "lizard") {
      announceCompWinner();
      this.players[1].wins++;
    };

    console.log("user wins: ", this.players[0].wins, "comp wins: ", this.players[1].wins)
  };

  makeCompMove() {
    if (this.gameType === "basic") {
      this.computerMove = this.basicMoves[Math.floor(Math.random() * this.basicMoves.length)];
    } else {
      this.computerMove = this.advancedMoves[Math.floor(Math.random() * this.advancedMoves.length)];
    };
  };
};
