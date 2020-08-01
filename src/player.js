class Player {
  constructor(id, token, winCount) {
    this.id = id;
    this.token = token;
    this.winCount = winCount;
    this.tokensOnBoard = 0;
    this.hasEnoughTokens = false;
    this.hasCurrentTurn = false;
    //add spacesTaken property?
  }

  gainWin() {
    this.winCount += 1;
  }

  placeToken() {
    this.hasCurrentTurn = true;
    this.tokensOnBoard += 1;
    if (this.tokensOnBoard === 3) {
      this.hasEnoughTokens = true;
    }
  }
};

module.exports = Player;
