var currentGame;
var user;
var computerPlayer;

//----------------------QUERY SELECTORS----------------------//

var mainHTML = document.getElementById("main");
var header = document.getElementById("header");

var landingMessage = document.getElementById("landing-message");

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

var mainVid = document.getElementById("main-vid");

//----------------------EVENT LISTENERS----------------------//

mainVid.addEventListener("click", function () {
  mainVid.play();
  fadeOut(landingMessage);
  setTimeout(hide, 1200, landingMessage);
  setTimeout(pauseVid, 5000);
  setTimeout(show, 3500, mainHTML);
  setTimeout(show, 3500, header);
});

submitNameButton.addEventListener("click", submitNameFunctions);

basicButton.addEventListener("click", function () {
  currentGame.gameType = "basic";
  fadeOut(gameTypePage);
  setTimeout(hide, 2000, gameTypePage);
  setTimeout(removeFadeOut, 2000, gameTypePage);
  setTimeout(show, 2000, gameplayPage);
  setTimeout(show, 2000, changeGameButton);
  hide(cup);
  hide(matches);
});

advancedButton.addEventListener("click", function () {
  currentGame.gameType = "advanced";
  fadeOut(gameTypePage);
  setTimeout(hide, 2000, gameTypePage);
  setTimeout(removeFadeOut, 2000, gameTypePage);
  setTimeout(show, 2000, gameplayPage);
  setTimeout(show, 2000, changeGameButton); 
});

changeGameButton.addEventListener("click", function () {
  startNewGame();
  fadeOut(gameplayPage);
  fadeOut(changeGameButton);
  setTimeout(hide, 2000, changeGameButton);
  setTimeout(hide, 2000, gameplayPage);
  setTimeout(removeFadeOut, 2000, gameplayPage);
  setTimeout(removeFadeOut, 2000, changeGameButton);
  setTimeout(show, 2000, gameTypePage);
  setTimeout(show, 2000, cup);
  setTimeout(show, 2000, matches);
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
  currentGame = new Game (user, computerPlayer);
};

//----------------------EVENT HANDLERS - DOM ----------------------//

//TRANSITIONS

function hide(element) {
  element.classList.add("hidden");
};

function show(element) {
  element.classList.remove("hidden");
};

function fadeOut(element) {
  element.classList.add("fadeout");
};

function removeFadeOut(element) {
  element.classList.remove("fadeout");
}

//OTHER

function submitNameFunctions() {
  createHumanPlayer(nameInput.value, emojiInput.value);
  startNewGame();
  updateUserInfo();
  updatePoints();
  fadeOut(namePage);
  fadeOut(mainHTML);
  fadeOut(asideLeft);
  fadeOut(asideRight);
  fadeOut(header);
  resumeVid();
  setTimeout(hide, 2000, namePage);
  setTimeout(hide, 2000, mainHTML);
  setTimeout(hide, 2000, asideLeft);
  setTimeout(hide, 2000, asideRight);
  setTimeout(hide, 2000, header);
  setTimeout(removeFadeOut, 2000, mainHTML);
  setTimeout(removeFadeOut, 2000, asideLeft);
  setTimeout(removeFadeOut, 2000, asideRight);
  asideLeft.classList.add("aside-full-speed-fade");
  asideRight.classList.add("aside-full-speed-fade");
  setTimeout(removeFadeOut, 2000, header);
  setTimeout(show, 9000, mainHTML);
  setTimeout(show, 9000, gameTypePage);
  setTimeout(show, 9000, asideLeft);
  setTimeout(show, 9000, asideRight);
  setTimeout(show, 9000, header);
  setTimeout(pauseVid, 9000);
};

function pauseVid() {
  mainVid.pause();
};

function resumeVid() {
  mainVid.play();
};

function announceUserWinner() {
  hide(gameplayPage);
  show(userWinsMessage);
  userWinsMessage.innerHTML = `
    <p>${user.name} wins!</p>
    `;
  setTimeout(hide, 2000, userWinsMessage);
  setTimeout(show, 2000, gameplayPage);
};

function announceCompWinner() {
  hide(gameplayPage);
  show(compWinsMessage);
  setTimeout(hide, 2000, compWinsMessage);
  setTimeout(show, 2000, gameplayPage);
};

function announceDraw() {
  hide(gameplayPage);
  show(drawMessage);
  setTimeout(hide, 2000, drawMessage);
  setTimeout(show, 2000, gameplayPage);
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















