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
    var roundWinner;
    this.makeCompMove();
    if (this.humanMove === this.computerMove) {
      displayOutcome(drawMessage);
      return;
    } else if (this.humanMove === "stone" && this.computerMove === "paper") {
      roundWinner = this.players[1];
    } else if (this.humanMove === "stone" && this.computerMove === "scissors") {
      roundWinner = this.players[0];
    } else if (this.humanMove === "stone" && this.computerMove === "matches") {
      roundWinner = this.players[1];
    } else if (this.humanMove === "stone" && this.computerMove === "cup") {
      roundWinner = this.players[0];
    } else if (this.humanMove === "paper" && this.computerMove === "stone") {
      roundWinner = this.players[0];
    } else if (this.humanMove === "paper" && this.computerMove === "scissors") {
      roundWinner = this.players[1];
    } else if (this.humanMove === "paper" && this.computerMove === "matches") {
      roundWinner = this.players[1];
    } else if (this.humanMove === "paper" && this.computerMove === "cup") {
      roundWinner = this.players[0];
    } else if (this.humanMove === "scissors" && this.computerMove === "stone") {
      roundWinner = this.players[1];
    } else if (this.humanMove === "scissors" && this.computerMove === "paper") {
      roundWinner = this.players[0];
    } else if (this.humanMove === "scissors" && this.computerMove === "matches") {
      roundWinner = this.players[0];
    } else if (this.humanMove === "scissors" && this.computerMove === "cup") {
      roundWinner = this.players[1];
    } else if (this.humanMove === "cup" && this.computerMove === "stone") {
      roundWinner = this.players[1];
    } else if (this.humanMove === "cup" && this.computerMove === "paper") {
      roundWinner = this.players[1];
    } else if (this.humanMove === "cup" && this.computerMove === "scissors") {
      roundWinner = this.players[0];
    } else if (this.humanMove === "cup" && this.computerMove === "matches") {
      roundWinner = this.players[0];
    } else if (this.humanMove === "matches" && this.computerMove === "stone") {
      roundWinner = this.players[0];
    } else if (this.humanMove === "matches" && this.computerMove === "paper") {
      roundWinner = this.players[0];
    } else if (this.humanMove === "matches" && this.computerMove === "scissors") {
      roundWinner = this.players[1];
    } else if (this.humanMove === "matches" && this.computerMove === "cup") {
      roundWinner = this.players[1];
    };
    roundWinner.wins++;
    if (this.players[0].wins === 10) {
      endGame(this.players[0]);
      return;
    } else if (this.players[1].wins === 10) {
      endGame(this.players[1]);
      return;
    };
    if (roundWinner === this.players[0]) {
      displayOutcome(userPointMessage);
    } else if (roundWinner === this.players[1]) {
      displayOutcome(compPointMessage);
    };
  };

  makeCompMove() {
    if (this.gameType === "basic") {
      this.computerMove = this.basicMoves[Math.floor(Math.random() * this.basicMoves.length)];
    } else {
      this.computerMove = this.advancedMoves[Math.floor(Math.random() * this.advancedMoves.length)];
    };
  };
};