class Player {
  constructor(name, token) {
      this.name = name
      this.token = token
      this.points = 0
  };

  takeTurn(move) {
    currentGame.humanMove = move;
    currentGame.checkWinner();
  }; 
};