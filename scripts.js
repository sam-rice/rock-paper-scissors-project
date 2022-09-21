var currentGame;

var humanPlayer;
var computerPlayer;



//landing page, user creates avatar 

function createHumanPlayer() {
    humanPlayer = new Player ("Sam", "human emoji");
    computerPlayer = new Player ("Computer", "comp emoji");
    currentGame = new Game (humanPlayer, computerPlayer)
};

//user chooses game type

function startFirstGame(type) {
    currentGame.gameType = type;
}

//game page - basic
//user selects move with humanPlayer.takeTurn(event);


