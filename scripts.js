var currentGame;
var user;
var computerPlayer;

//----------------------QUERY SELECTORS----------------------//

var submitNameButton = document.getElementById("submit-name");
var nameInput = document.getElementById("name-input");
var emojiInput = document.getElementById("emojis");

var namePage = document.getElementById("choose-name");
var gameTypePage = document.getElementById("choose-game");






//----------------------EVENT LISTENERS----------------------//

submitNameButton.addEventListener("click", function () {
  createHumanPlayer(nameInput.value, emojiInput.value);
  startNewGame();
  hide(namePage);
  show(gameTypePage);
});








//----------------------EVENT HANDLERS - DATA ----------------------//

//LANDING PAGE

function createHumanPlayer(name, emoji) {
  user = new Player (name, emoji);
  computerPlayer = new Player ("Computer", "comp emoji");
};

function startNewGame() {
  currentGame = new Game (user, computerPlayer)
};

//GAME-TYPE PAGE

function chooseGameType(type) {
  currentGame.gameType = type;
  //update DOM - relevant game page
};

//GAMEPLAY PAGE

function announceUserWinner() {
  console.log("user wins!")
};

function announceCompWinner() {
  console.log("computer wins!")
};

function announceDraw() {
  console.log("draw!")
};

//----------------------EVENT HANDLERS - DOM ----------------------//

function hide(element) {
  element.classList.add("hidden");
};

function show(element) {
  element.classList.remove("hidden");
};

//LANDING PAGE

function displayGameTypePage() {

}




//GAME-TYPE PAGE







//GAMEPLAY PAGE






