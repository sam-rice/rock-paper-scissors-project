class Game {
  constructor(humanPlayer, computerPlayer) {
    this.players = [humanPlayer, computerPlayer]
    this.gameType = null
    this.humanMove = null
    this.computerMove = null
    this.basicMoves = ["stone", "paper", "scissors"]
    this.advancedMoves = ["stone", "paper", "scissors", "matches", "cup"]
  };

  checkWinner() {
    this.makeCompMove();
    if (this.humanMove === this.computerMove) {
      announceDraw();
    } else if (this.humanMove === "stone" && this.computerMove === "paper") {
      announceCompWinner();
      this.players[1].wins++;
    } else if (this.humanMove === "stone" && this.computerMove === "scissors") {
      announceUserWinner();
      this.players[0].wins++;
    } else if (this.humanMove === "stone" && this.computerMove === "matches") {
      announceCompWinner();
      this.players[1].wins++;
    } else if (this.humanMove === "stone" && this.computerMove === "cup") {
      announceUserWinner();
      this.players[0].wins++;
    } else if (this.humanMove === "paper" && this.computerMove === "stone") {
      announceUserWinner();
      this.players[0].wins++;
    } else if (this.humanMove === "paper" && this.computerMove === "scissors") {
      announceCompWinner();
      this.players[1].wins++;
    } else if (this.humanMove === "paper" && this.computerMove === "matches") {
      announceCompWinner();
      this.players[1].wins++;
    } else if (this.humanMove === "paper" && this.computerMove === "cup") {
      announceUserWinner();
      this.players[0].wins++;
    } else if (this.humanMove === "scissors" && this.computerMove === "stone") {
      announceCompWinner();
      this.players[1].wins++;
    } else if (this.humanMove === "scissors" && this.computerMove === "paper") {
      announceUserWinner();
      this.players[0].wins++;
    } else if (this.humanMove === "scissors" && this.computerMove === "matches") {
      announceUserWinner();
      this.players[0].wins++;
    } else if (this.humanMove === "scissors" && this.computerMove === "cup") {
      announceCompWinner();
      this.players[1].wins++;
    } else if (this.humanMove === "cup" && this.computerMove === "stone") {
      announceCompWinner();
      this.players[1].wins++;
    } else if (this.humanMove === "cup" && this.computerMove === "paper") {
      announceCompWinner();
      this.players[1].wins++;
    } else if (this.humanMove === "cup" && this.computerMove === "scissors") {
      announceUserWinner();
      this.players[0].wins++;
    } else if (this.humanMove === "cup" && this.computerMove === "matches") {
      announceUserWinner();
      this.players[0].wins++;
    } else if (this.humanMove === "matches" && this.computerMove === "stone") {
      announceUserWinner();
      this.players[0].wins++;
    } else if (this.humanMove === "matches" && this.computerMove === "paper") {
      announceUserWinner();
      this.players[0].wins++;
    } else if (this.humanMove === "matches" && this.computerMove === "scissors") {
      announceCompWinner();
      this.players[1].wins++;
    } else if (this.humanMove === "matches" && this.computerMove === "cup") {
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
