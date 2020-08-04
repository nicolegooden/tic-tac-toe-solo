//////// global variables ////////

var currentPlayer1;
var currentPlayer2;
var currentGame;

//////// query selectors ////////

var winsPlayer1 = document.querySelector('.player-one-wins');
var winsPlayer2 = document.querySelector('.player-two-wins');
var whoseTurn = document.querySelector('.declare-turn');
var allSpaces = document.querySelectorAll('.board');
var token1 = document.querySelector('.harper-with-tongue');
var token2 = document.querySelector('.harper-with-smile');
var board = document.querySelector('.board-layout');

//////// event listeners ////////

winsPlayer1.addEventListener('click', updateRecord);
winsPlayer2.addEventListener('click', updateRecord);
board.addEventListener('click', addToken);
board.addEventListener('click', addToken);
window.addEventListener('load', enlistPlayers);
window.addEventListener('load', startGame);
window.addEventListener('load', showTurn);
window.addEventListener('load', showRecord);
window.addEventListener('load', retrieveWins);

//////// event handlers ////////

function enlistPlayers() {
  var playerOne = new Player(1, token1);
  var playerTwo = new Player(2, token2);
  currentPlayer1 = playerOne;
  currentPlayer2 = playerTwo;
};

function startGame() {
  var newGame = new Game(currentPlayer1, currentPlayer2, true, false);
  currentGame = newGame;
};

function addToken(event) {
  var spaceNumber = event.target.classList[1].split('-')[1];
  for (var i = 0; i < allSpaces.length; i++) {
    if (event.target === allSpaces[i] && currentGame.player1Turn && allSpaces[i].innerHTML === '') {
      currentPlayer1.placeToken(currentPlayer1, currentGame, spaceNumber);
      allSpaces[i].innerHTML =
        `<img class="harper-with-tongue" src="./assets/harper-with-tongue.jpg" alt="player-one-token">`;
      switchTurns();
    }
    if (event.target === allSpaces[i] && currentGame.player2Turn && allSpaces[i].innerHTML === '') {
      currentPlayer2.placeToken(currentPlayer2, currentGame, spaceNumber);
      allSpaces[i].innerHTML =
        `<img class="harper-with-smile" src="./assets/harper-with-smile.jpg" alt="player-two-token">`;
      switchTurns();
    }
  }
  showTurn();
  verifyWinConditions();
};

function showTurn() {
  if (currentGame.player1Turn) {
    whoseTurn.innerHTML = `<h1 class="turn">It's <img class="harper-with-tongue small" src="./assets/harper-with-tongue.jpg" alt="player-one-token">'s turn!</h1>`;
  }
  if (currentGame.player2Turn) {
    whoseTurn.innerHTML = `<h1 class="turn">It's <img class="harper-with-smile small" src="./assets/harper-with-smile.jpg" alt="player-two-token">'s turn!</h1>`;
  }
};

function switchTurns() {
  currentGame.player1Turn = !currentGame.player1Turn;
  currentGame.player2Turn = !currentGame.player2Turn;
};

function showRecord() {
  winsPlayer1.innerText = '0 WINS';
  winsPlayer2.innerText = '0 WINS';
};

function updateFromGameEnd() {
  currentGame.detectReset(currentPlayer1, currentPlayer2);
  if (currentGame.hasEnded) {
    updateRecord();
    resetBoard();
  }
};

function verifyWinConditions() {
  if (currentPlayer1.spacesTaken.length >=3 || currentPlayer2.spacesTaken.length >=3) {
    currentGame.checkForWin(currentPlayer1);
    if (!currentGame.hasEnded) {
      currentGame.checkForWin(currentPlayer2);
    }
  }
  updateFromGameEnd();
};

function updateRecord() {
  winsPlayer1.innerHTML = `<h1 class="player-one-wins">${currentPlayer1.winCount} WINS</h1>`;
  winsPlayer2.innerHTML = `<h1 class="player-two-wins">${currentPlayer2.winCount} WINS</h1>`;
  currentPlayer1.saveWinsToStorage();
  currentPlayer2.saveWinsToStorage();
};

function resetBoard() {
  stateWinner();
  window.setTimeout(clearBoard, 2600);
  window.setTimeout(restartNewGame, 2600);
};

function stateWinner() {
  whoseTurn.innerHTML = '';
  if (currentPlayer1.hasVictory) {
    whoseTurn.innerHTML = `<h2 class="turn">New victory for <img class="harper-with-tongue small" src="./assets/harper-with-tongue.jpg" alt="player-one-token">!</h2>`;
  }
  if (currentPlayer2.hasVictory) {
    whoseTurn.innerHTML = `<h2 class="turn">New victory for <img class="harper-with-smile small" src="./assets/harper-with-smile.jpg" alt="player-two-token">!</h2>`;
  }
  if (!currentPlayer1.hasVictory && !currentPlayer2.hasVictory) {
    whoseTurn.innerHTML = `<h1 class="turn">Sad woof, it's a tie</h1>`;
  }
};

function restartNewGame() {
  startGame();
  switchTurns();
  showTurn();
  currentPlayer1.hasVictory = false;
  currentPlayer2.hasVictory = false;
};

function clearBoard() {
  for (var i = 0; i < allSpaces.length; i++) {
    allSpaces[i].innerHTML = '';
  }
};

function retrieveWins() {
  currentPlayer1.retrieveWinsFromStorage();
  currentPlayer2.retrieveWinsFromStorage();
}
