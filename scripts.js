//----------------------DATA MODEL----------------------//

var currentGame;
var user;
var computerPlayer;

//----------------------QUERY SELECTORS----------------------//

var mainHTML = document.getElementById("main");
var header = document.getElementById("header");
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

var openModal = document.getElementById("open-modal");
var closeModal = document.getElementById("close-modal");
var modal = document.getElementById("movie-modal");

var gameplayPage = document.getElementById("gameplay-page");
var changeGameButton = document.getElementById("change-game");
var stone = document.getElementById("stone");
var paper = document.getElementById("paper");
var scissors = document.getElementById("scissors");
var matches = document.getElementById("matches");
var cup = document.getElementById("cup");
var userPointMessage = document.getElementById("user-point");
var compPointMessage = document.getElementById("comp-point");
var drawMessage = document.getElementById("draw");
var userMove = document.getElementById("user-move");
var compMove = document.getElementById("comp-move");
var mainVid = document.getElementById("main-vid");
var enterSitePage = document.getElementById("enter-site");
var winnerMessage = document.getElementById("winner-message");

//----------------------EVENT LISTENERS----------------------//

enterSitePage.addEventListener("click", transitionToNamePage);

submitNameButton.addEventListener("click", function () {
  createHumanPlayer(nameInput.value, emojiInput.value);
  startNewGame();
  transitionToGameTypes();
});

openModal.addEventListener("click", function () {
  modal.showModal();
});

closeModal.addEventListener("click", function () {
  modal.setAttribute("closing", "");
  modal.addEventListener("animationend", function () {
    modal.removeAttribute("closing");
    modal.close();
  }, {once: true});
})

basicButton.addEventListener("click", function () {
  currentGame.gameType = "basic";
  transitionToGame();
});

advancedButton.addEventListener("click", function () {
  currentGame.gameType = "advanced";
  transitionToGame();
});

changeGameButton.addEventListener("click", transitionBackGameType);

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

function transitionToNamePage() {
  mainVid.play();
  fadeOut(enterSitePage);
  setTimeout(hide, 1200, enterSitePage);
  setTimeout(pauseVid, 5000);
  setTimeout(show, 3500, mainHTML);
  setTimeout(show, 3500, header);
};

function transitionToGameTypes() {
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

function transitionToMovieInfo() {

};

function transitionToGame() {
  fadeOut(gameTypePage);
  setTimeout(hide, 1800, gameTypePage);
  setTimeout(removeFadeOut, 2000, gameTypePage);
  setTimeout(show, 2000, gameplayPage);
  setTimeout(show, 2000, changeGameButton);
  if (currentGame.gameType === "basic") {
    hide(cup);
    hide(matches);
  };
};

function transitionBackGameType() {
  fadeOut(gameplayPage);
  fadeOut(changeGameButton);
  setTimeout(hide, 2000, changeGameButton);
  setTimeout(hide, 2000, gameplayPage);
  setTimeout(removeFadeOut, 2000, gameplayPage);
  setTimeout(removeFadeOut, 2000, changeGameButton);
  setTimeout(show, 2000, gameTypePage);
  setTimeout(show, 2000, cup);
  setTimeout(show, 2000, matches);
};

function displayOutcome(element) {
  updateCurrentMoves();
  hide(gameplayPage);
  show(userMove);
  show(compMove);
  show(element);
  setTimeout(fadeOut, 2000, userMove);
  setTimeout(fadeOut, 2000, compMove);
  setTimeout(fadeOut, 2000, element);
  setTimeout(hide, 4000, userMove);
  setTimeout(hide, 4000, compMove);
  setTimeout(hide, 4000, element);
  setTimeout(removeFadeOut, 4000, userMove);
  setTimeout(removeFadeOut, 4000, compMove);
  setTimeout(removeFadeOut, 4000, element);
  setTimeout(show, 3500, gameplayPage);
};

function endGame(player) {
  resumeVid();
  fadeOut(mainHTML);
  fadeOut(asideLeft);
  fadeOut(asideRight);
  fadeOut(header);
  setTimeout(hide, 2000, mainHTML);
  setTimeout(hide, 2000, asideLeft);
  setTimeout(hide, 2000, asideRight);
  setTimeout(hide, 2000, header);
  winnerMessage.innerHTML = `<p>${player.name} wins....`;
  setTimeout(show, 15000, winnerMessage);
  setTimeout(fadeOut, 22000, winnerMessage);
  setTimeout(hide, 24000, winnerMessage);
  // setTimeout(refreshPage, 20000)
};

//UTILITIES

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
};

function pauseVid() {
  mainVid.pause();
};

function resumeVid() {
  mainVid.play();
};

function refreshPage() {
  window.location.reload();
};

function updateCurrentMoves() {
  userMove.innerHTML = `<img src="assets/${currentGame.humanMove}-user.png" class="user-move">`;
  compMove.innerHTML = `<img src="assets/${currentGame.computerMove}-comp.png" class="comp-move">`;
};

function updateUserInfo() {
  document.getElementById("user-name").innerText = user.name;
  document.getElementById("user-emoji").innerText = user.token;
  userPointMessage.innerHTML = `
  <p>${user.name} wins!</p>
  `;
};

function updatePoints() {
  userPoints.innerHTML = `
    <p>points: ${user.points}</p>
    `;
  compPoints.innerHTML = `
    <p>points: ${computerPlayer.points}</p>
    `;
};