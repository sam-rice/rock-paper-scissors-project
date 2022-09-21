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
      } else if (move === "scissors") {
          currentGame.humanMove = "scissors";
      } else if (move === "ghost") {
          currentGame.humanMove = "ghost";
      } else {
          currentGame.humanMove = "lizard";
      };
      currentGame.checkWinner();
  }; 
};

