class Game {
  constructor(user, computerPlayer) {
    this.players = [user, computerPlayer]
    this.gameType = null
    this.userMove = null
    this.computerMove = null
    this.basic = ["stone", "paper", "scissors"]
    this.advanced = ["stone", "paper", "scissors", "matches", "cup"]
  };

  checkWinner() {
    let roundWinner;
    this.makeCompMove();
    if (this.userMove === this.computerMove) {
      displayOutcome(drawMessage);
      return;
    } else if ((this.userMove === "stone" && this.computerMove === "scissors") ||
      (this.userMove === "stone" && this.computerMove === "cup") ||
      (this.userMove === "paper" && this.computerMove === "stone") ||
      (this.userMove === "paper" && this.computerMove === "cup") ||
      (this.userMove === "scissors" && this.computerMove === "paper") ||
      (this.userMove === "scissors" && this.computerMove === "matches") ||
      (this.userMove === "cup" && this.computerMove === "scissors") ||
      (this.userMove === "cup" && this.computerMove === "matches") ||
      (this.userMove === "matches" && this.computerMove === "stone") ||
      (this.userMove === "matches" && this.computerMove === "paper")) {
      roundWinner = this.players[0];
    } else {
      roundWinner = this.players[1];
    };

    roundWinner.points++;
    if (this.players[0].points === 10) {
      endGame(this.players[0]);
      return;
    } else if (this.players[1].points === 10) {
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
    this.computerMove = this[this.gameType][Math.floor(Math.random() * this[this.gameType].length)];
  };
};