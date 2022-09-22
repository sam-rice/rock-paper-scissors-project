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
var userPoints = document.getElementById("user-points");
var compPoints = document.getElementById("comp-points");
var basicButton = document.getElementById("basic-button");
var advancedButton = document.getElementById("advanced-button");

var gameplayPage = document.getElementById("gameplay-page");
var changeGameButton = document.getElementById("change-game");
var stone = document.getElementById("stone");
var paper = document.getElementById("paper");
var scissors = document.getElementById("scissors");
var matches = document.getElementById("matches");
var cup = document.getElementById("cup");
var userWinsMessage = document.getElementById("user-winner");
var compWinsMessage = document.getElementById("comp-winner");
var drawMessage = document.getElementById("draw");


//----------------------EVENT LISTENERS----------------------//

submitNameButton.addEventListener("click", function () {
  createHumanPlayer(nameInput.value, emojiInput.value);
  startNewGame();
  hide(namePage);
  show(gameTypePage);
  show(asideLeft);
  show(asideRight);
  updateUserInfo();
  updatePoints();
});

basicButton.addEventListener("click", function () {
  currentGame.gameType = "basic";
  hide(gameTypePage);
  show(gameplayPage);
  show(changeGameButton);
  hide(cup);
  hide(matches);
});

advancedButton.addEventListener("click", function () {
  currentGame.gameType = "advanced";
  hide(gameTypePage);
  show(gameplayPage);
  show(changeGameButton); 
});

changeGameButton.addEventListener("click", function () {
  startNewGame();
  hide(gameplayPage);
  show(gameTypePage);
  show(cup);
  show(matches);
});

gameplayPage.addEventListener("click", function (event) {
  if (event.target.id === "gameplay-page") {
    return;
  };
  user.takeTurn(event.target.id)
  updatePoints();
});

//----------------------EVENT HANDLERS - DATA ----------------------//

function createHumanPlayer(name, emoji) {
  user = new Player (name, emoji);
  computerPlayer = new Player ("Computer", "🖥");
};

function startNewGame() {
  currentGame = new Game (user, computerPlayer)
};

//----------------------EVENT HANDLERS - DOM ----------------------//

function announceUserWinner() {
  hide(gameplayPage);
  show(userWinsMessage);
  userWinsMessage.innerHTML = `
    <p>${user.name} wins!</p>
    `;
  setTimeout(hide, 2000, userWinsMessage)
  setTimeout(show, 2000, gameplayPage)
};

function announceCompWinner() {
  hide(gameplayPage);
  show(compWinsMessage);
  setTimeout(hide, 2000, compWinsMessage)
  setTimeout(show, 2000, gameplayPage)
};

function announceDraw() {
  hide(gameplayPage);
  show(drawMessage);
  setTimeout(hide, 2000, drawMessage)
  setTimeout(show, 2000, gameplayPage)
};

function hide(element) {
  element.classList.add("hidden");
};

function show(element) {
  element.classList.remove("hidden");
};

function updateUserInfo() {
  document.getElementById("user-name").innerText = user.name;
  document.getElementById("user-emoji").innerText = user.token;
};

function updatePoints() {
  userPoints.innerHTML = `
    <p>rounds won: 0</p>
    <p>points: ${user.wins}</p>
    `;
  compPoints.innerHTML = `
    <p>rounds won: 0</p>
    <p>points: ${computerPlayer.wins}</p>
    `;
};