var currentGame;
var user;
var computerPlayer;

//----------------------QUERY SELECTORS----------------------//

var namePage = document.getElementById("choose-name");
var submitNameButton = document.getElementById("submit-name");
var nameInput = document.getElementById("name-input");
var emojiInput = document.getElementById("emojis");

var gameTypePage = document.getElementById("choose-game");
var asideLeft = document.getElementById("aside-left");
var asideRight = document.getElementById("aside-right");
var basicButton = document.getElementById("basic-button");
var advancedButton = document.getElementById("advanced-button");

var gameplayPage = document.getElementById("gameplay-page");
var changeGameButton = document.getElementById("change-game");



//----------------------EVENT LISTENERS----------------------//

submitNameButton.addEventListener("click", function () {
  createHumanPlayer(nameInput.value, emojiInput.value);
  startNewGame();
  hide(namePage);
  show(gameTypePage);
  show(asideLeft);
  show(asideRight);
  updateUserInfo();
});

basicButton.addEventListener("click", function () {
  currentGame.gameType = "basic";
  hide(gameTypePage);
  show(gameplayPage);
  show(changeGameButton);
});

advancedButton.addEventListener("click", function () {
  currentGame.gameType = "advanced";
  hide(gameTypePage);
  show(gameplayPage);
  show(changeGameButton); 
});






//----------------------EVENT HANDLERS - DATA ----------------------//

//LANDING PAGE

function createHumanPlayer(name, emoji) {
  user = new Player (name, emoji);
  computerPlayer = new Player ("Computer", "🖥");
};

function startNewGame() {
  currentGame = new Game (user, computerPlayer)
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

function updateUserInfo() {
  document.getElementById("user-name").innerText = user.name;
  document.getElementById("user-emoji").innerText = user.token;
};




//GAME-TYPE PAGE







//GAMEPLAY PAGE






