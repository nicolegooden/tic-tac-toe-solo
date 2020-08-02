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
window.addEventListener('load', showTurn); //might need to change node
window.addEventListener('click', addToken);
window.addEventListener('load', enlistPlayers);
window.addEventListener('load', startGame);

//////// event handlers ////////

function enlistPlayers() {
  var playerOne = new Player(1, 'berner tongue', 0);
  var playerTwo = new Player(2, 'berner smile', 0);
  currentPlayer1 = playerOne;
  currentPlayer2 = playerTwo;
};

function startGame() {
  var newGame = new Game(currentPlayer1, currentPlayer2);
  currentGame = newGame;
};

function showTurn(player) {
  if (currentPlayer1.hasNextTurn) {
    whoseTurn.innerText = `It's ${token1}'s turn!`;
  }
  if (currentPlayer2.hasNextTurn) {
    whoseTurn.innerText = `It's ${token2}'s turn!`;
  }
};

function addToken(event) {
  for (var i = 0; i < allSpaces.length; i++) {
    if (event.target === allSpaces[i]) {
      allSpaces[i].innerHTML =
        `<img class="harper-with-tongue" src="./assets/harper-with-tongue.jpg" alt="player-one-token">`;
    }
  }
};

function increaseRecord(player) {

};

function switchTurns() {

};
