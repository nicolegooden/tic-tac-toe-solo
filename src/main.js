//////// global variables ////////

var currentPlayer1;
var currentPlayer2;
var currentGame;

//////// query selectors ////////

var winsPlayer1 = document.querySelector('.player-one-wins');
var winsPlayer2 = document.querySelector('.player-two-wins');
var whoseTurn = document.querySelector('.declare-turn');
var allBoardSpaces = document.querySelectorAll('.board');
var board = document.querySelector('.board-layout');

//////// event listeners ////////

winsPlayer1.addEventListener('click', updateRecord);
winsPlayer2.addEventListener('click', updateRecord);
board.addEventListener('click', addToken);
window.addEventListener('load', function actOnLoad() {
  enlistPlayers();
  startGame();
  showTurn();
  showRecord();
  retrieveWins();
});

//////// event handlers & other functions ////////

function enlistPlayers() {
  var token1 = `<img class="harper-with-tongue" src="./assets/harper-with-tongue.jpg" alt="player-one-token">`;
  var token2 = `<img class="harper-with-smile" src="./assets/harper-with-smile.jpg" alt="player-two-token">`;
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
  for (var i = 0; i < allBoardSpaces.length; i++) {
    if (event.target === allBoardSpaces[i] && allBoardSpaces[i].innerHTML === '') {
      if (currentGame.player1Turn) {
        currentGame.placeToken(currentPlayer1, spaceNumber);
        allBoardSpaces[i].innerHTML = currentPlayer1.token;
      }
      if (currentGame.player2Turn) {
        currentGame.placeToken(currentPlayer2, spaceNumber);
        allBoardSpaces[i].innerHTML = currentPlayer2.token;
      }
      switchTurns();
    }
  }
  showTurn();
  verifyWinConditions();
};

function showTurn() {
  if (currentGame.player1Turn) {
    whoseTurn.innerHTML = `<h1 class="turn">It's ${currentPlayer1.token}'s turn!</h1>`;
  }
  if (currentGame.player2Turn) {
    whoseTurn.innerHTML = `<h1 class="turn">It's ${currentPlayer2.token}'s turn!</h1>`;
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
  saveWins();
  updateFromGameEnd();
};

function updateRecord() {
  winsPlayer1.innerHTML = `<h1 class="player-one-wins">${currentPlayer1.winCount} WINS</h1>`;
  winsPlayer2.innerHTML = `<h1 class="player-two-wins">${currentPlayer2.winCount} WINS</h1>`;
};

function resetBoard() {
  stateWinner();
  window.setTimeout(clearBoard, 2600);
  window.setTimeout(restartNewGame, 2600);
};

function stateWinner() {
  whoseTurn.innerHTML = '';
  if (currentPlayer1.hasVictory) {
    whoseTurn.innerHTML = `<h2 class="turn">New victory for ${currentPlayer1.token}!`;
  }
  if (currentPlayer2.hasVictory) {
    whoseTurn.innerHTML = `<h2 class="turn">New victory for ${currentPlayer2.token}!`;
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
  for (var i = 0; i < allBoardSpaces.length; i++) {
    allBoardSpaces[i].innerHTML = '';
  }
};

function saveWins() {
  currentPlayer1.saveWinsToStorage();
  currentPlayer2.saveWinsToStorage();
};

function retrieveWins() {
  currentPlayer1.retrieveWinsFromStorage();
  currentPlayer2.retrieveWinsFromStorage();
};
