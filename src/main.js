var winsPlayer1 = document.querySelector('.player-one-wins');
var winsPlayer2 = document.querySelector('.player-two-wins');
var whoseTurn = document.querySelector('.declare-turn');
var allBoardSpaces = document.querySelectorAll('.board');
var board = document.querySelector('.board-layout');

var currentGame;

winsPlayer1.addEventListener('click', updateRecord);
winsPlayer2.addEventListener('click', updateRecord);
board.addEventListener('click', addToken);
window.addEventListener('load', function actOnLoad() {
  startGame();
  showTurn();
  retrieveWins();
});

function startGame() {
  var token1 = `<img class="harper-with-tongue" src="./assets/harper-with-tongue.jpg" alt="player-one-token">`;
  var token2 = `<img class="harper-with-smile" src="./assets/harper-with-smile.jpg" alt="player-two-token">`;
  var playerOne = new Player(1, token1);
  var playerTwo = new Player(2, token2);
  var newGame = new Game(playerOne, playerTwo, true, false);
  currentGame = newGame;
};

function addToken(event) {
  var spaceNumber = event.target.classList[1].split('-')[1];
  for (var i = 0; i < allBoardSpaces.length; i++) {
    if (event.target === allBoardSpaces[i] && allBoardSpaces[i].innerHTML === '') {
      if (currentGame.player1Turn) {
        currentGame.placeToken(currentGame.playerOne, spaceNumber);
        allBoardSpaces[i].innerHTML = currentGame.playerOne.token;
      }
      if (currentGame.player2Turn) {
        currentGame.placeToken(currentGame.playerTwo, spaceNumber);
        allBoardSpaces[i].innerHTML = currentGame.playerTwo.token;
      }
      switchTurns();
    }
  }
  showTurn();
  verifyWinConditions();
};

function showTurn() {
  if (currentGame.player1Turn) {
    whoseTurn.innerHTML = `<h1 class="turn">It's ${currentGame.playerOne.token}'s turn!</h1>`;
  }
  if (currentGame.player2Turn) {
    whoseTurn.innerHTML = `<h1 class="turn">It's ${currentGame.playerTwo.token}'s turn!</h1>`;
  }
};

function switchTurns() {
  currentGame.player1Turn = !currentGame.player1Turn;
  currentGame.player2Turn = !currentGame.player2Turn;
};

function updateFromGameEnd() {
  currentGame.detectDraw();
  if (currentGame.hasEnded) {
    currentGame.resetGame(currentGame.playerOne, currentGame.playerTwo);
    updateRecord();
    resetBoard();
  }
};

function verifyWinConditions() {
  if (currentGame.playerOne.spacesTaken.length >=3 || currentGame.playerTwo.spacesTaken.length >=3) {
    currentGame.checkForWin(currentGame.playerOne);
    if (!currentGame.hasEnded) {
      currentGame.checkForWin(currentGame.playerTwo);
    }
  }
  saveWins();
  updateFromGameEnd();
};

function updateRecord() {
  winsPlayer1.innerHTML = `<h1 class="player-one-wins">${currentGame.playerOne.winCount} WINS</h1>`;
  winsPlayer2.innerHTML = `<h1 class="player-two-wins">${currentGame.playerTwo.winCount} WINS</h1>`;
};

function resetBoard() {
  stateWinner();
  window.setTimeout(clearBoard, 1800);
  window.setTimeout(restartNewGame, 1800);
};

function stateWinner() {
  whoseTurn.innerHTML = '';
  if (currentGame.playerOne.hasVictory) {
    whoseTurn.innerHTML = `<h2 class="turn">New victory for ${currentGame.playerOne.token}!`;
  }
  if (currentGame.playerTwo.hasVictory) {
    whoseTurn.innerHTML = `<h2 class="turn">New victory for ${currentGame.playerTwo.token}!`;
  }
  if (!currentGame.playerOne.hasVictory && !currentGame.playerTwo.hasVictory) {
    whoseTurn.innerHTML = `<h1 class="turn">Sad woof, it's a tie</h1>`;
  }
};

function restartNewGame() {
  startGame();
  switchTurns();
  showTurn();
  currentGame.playerOne.hasVictory = false;
  currentGame.playerTwo.hasVictory = false;
};

function clearBoard() {
  for (var i = 0; i < allBoardSpaces.length; i++) {
    allBoardSpaces[i].innerHTML = '';
  }
};

function saveWins() {
  currentGame.playerOne.saveWinsToStorage();
  currentGame.playerTwo.saveWinsToStorage();
};

function retrieveWins() {
  currentGame.playerOne.retrieveWinsFromStorage();
  currentGame.playerTwo.retrieveWinsFromStorage();
  displayRetrievedWins();
};

function displayRetrievedWins() {
  winsPlayer1.innerHTML = `<h1 class="player-one-wins">${currentGame.playerOne.winCount} WINS</h1>`;
  winsPlayer2.innerHTML = `<h1 class="player-two-wins">${currentGame.playerTwo.winCount} WINS</h1>`;
};
