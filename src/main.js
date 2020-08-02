//////// global variables ////////

var currentPlayer1;
var currentPlayer2;
var currentGame;

//////// query selectors ////////

var winsPlayer1 = document.querySelector('.player-one-wins');
var winsPlayer2 = document.querySelector('.player-two-wins');
var whoseTurn = document.querySelector('.turn');
var allSpaces = document.querySelectorAll('.board');
var token1 = document.querySelector('.harper-with-tongue');
var token2 = document.querySelector('.harper-with-smile');

//////// event listeners ////////

winsPlayer1.addEventListener('click', increaseRecord);
winsPlayer2.addEventListener('click', increaseRecord);
whoseTurn.addEventListener('click', switchTurns);
window.addEventListener('click', addToken);
window.addEventListener('load', enlistPlayers);
window.addEventListener('load', startGame);
window.addEventListener('load', function showTurnWrapper() {
  showTurn(currentPlayer1, currentPlayer2);
});

//////// event handlers ////////

function enlistPlayers() {
  var playerOne = new Player(1, 'berner tongue', 0, true);
  var playerTwo = new Player(2, 'berner smile', 0, false);
  currentPlayer1 = playerOne;
  currentPlayer2 = playerTwo;
};

function startGame() {
  var newGame = new Game(currentPlayer1, currentPlayer2);
  currentGame = newGame;
};

function addToken(event) {
  for (var i = 0; i < allSpaces.length; i++) {
    if (event.target === allSpaces[i] && currentPlayer1.hasCurrentTurn) {
      currentPlayer1.placeToken(currentPlayer1, currentGame, allSpaces[i]);
      allSpaces[i].innerHTML =
        `<img class="harper-with-tongue" src="./assets/harper-with-tongue.jpg" alt="player-one-token">`;
    }
    if (event.target === allSpaces[i] && currentPlayer2.hasCurrentTurn) {
      currentPlayer2.placeToken(currentPlayer2, currentGame, allSpaces[i]);
      allSpaces[i].innerHTML =
        `<img class="harper-with-smile" src="./assets/harper-with-smile.jpg" alt="player-two-token">`;
    }
  }
  currentPlayer1.hasCurrentTurn = !currentPlayer1.hasCurrentTurn;
  currentPlayer2.hasCurrentTurn = !currentPlayer2.hasCurrentTurn;
};

function showTurn(player1, player2) {
  if (player1.hasCurrentTurn) {
    whoseTurn.innerText = `It's ${token1}'s turn!`;
  }
  if (player2.hasCurrentTurn) {
    whoseTurn.innerText = `It's ${token2}'s turn!`;
  }
};

function increaseRecord() {

};

function switchTurns() {

};
