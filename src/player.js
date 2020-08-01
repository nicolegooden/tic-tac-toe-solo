class Player {
  constructor(id, token, winCount) {
    this.id = id;
    this.token = token;
    this.winCount = winCount;
    this.hasCurrentTurn = false;
    this.spacesTaken = [];
    // this.currentSpace = 0;
    // this.tokensOnBoard = 0;
    // this.hasEnoughTokens = false;
  }

  placeToken(player, game, space) {
    this.hasCurrentTurn = true;
    // this.tokensOnBoard += 1;
    game.blockedSpaces += 1;
    game.availableSpaces -= 1;
    for (var i = 0; i < game.allSpaces.length; i++) {
      if (game.allSpaces[i] === space) {
        game.allSpaces.splice(i, 1);
      }
    }
    this.spacesTaken.push(space);
    // if (this.tokensOnBoard === 3) {
    //   this.hasEnoughTokens = true;
    // }
  }
};

module.exports = Player;
