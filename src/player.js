class Player {
  constructor(id, token) {
    this.id = id;
    this.token = token;
    this.winCount = 0;
    this.spacesTaken = [];
    this.hasVictory = false;
  }

  saveWinsToStorage() {
    if (this.id === 1) {
      var p1WinsForStorage = JSON.stringify(this.winCount);
      localStorage.setItem('player 1 wins', p1WinsForStorage);
    } else {
      var p2WinsForStorage = JSON.stringify(this.winCount);
      localStorage.setItem('player 2 wins', p2WinsForStorage);
    }
  }

  retrieveWinsFromStorage() {
    if (this.id === 1) {
      var p1RetrievedWins = localStorage.getItem('player 1 wins');
      var p1ParsedWins = JSON.parse(p1RetrievedWins);
      this.winCount = p1ParsedWins;
      winsPlayer1.innerHTML = `<h1 class="player-one-wins">${p1ParsedWins} WINS</h1>`;
    } else {
      var p2RetrievedWins = localStorage.getItem('player 2 wins');
      var p2ParsedWins = JSON.parse(p2RetrievedWins);
      this.winCount = p2ParsedWins;
      winsPlayer2.innerHTML = `<h1 class="player-two-wins">${p2ParsedWins} WINS</h1>`;
    }
  }
};

// module.exports = Player;
