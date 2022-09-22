class Player {
  constructor(name, token) {
      this.name = name
      this.token = token
      this.wins = 0
  };

  takeTurn(move) {
      if (move === "stone") {
          currentGame.humanMove = "stone";
      } else if (move === "paper") {
          currentGame.humanMove = "paper";
      } else if (move === "scissors") {
          currentGame.humanMove = "scissors";
      } else if (move === "cup") {
          currentGame.humanMove = "cup";
      } else {
          currentGame.humanMove = "matches";
      };
      currentGame.checkWinner();
  }; 
};

