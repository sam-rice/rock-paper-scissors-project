var currentGame;
var user;
var computerPlayer;

//----------------LANDING PAGE----------------//

function createHumanPlayer() {
  user = new Player ("Sam", "human emoji");
  computerPlayer = new Player ("Computer", "comp emoji");
  startNewGame();
};

function startNewGame() {
  currentGame = new Game (user, computerPlayer)
};

//----------------GAME-TYPE PAGE----------------//

function chooseGameType(type) {
  currentGame.gameType = type;
  //update DOM - relevant game page
};

//----------------GAMEPLAY PAGE----------------//

function announceUserWinner() {
  console.log("user wins!")
};

function announceCompWinner() {
  console.log("computer wins!")
};

function announceDraw() {
  console.log("draw!")
};

