class Player {
  constructor(id, token) {
    this.id = id;
    this.token = token;
    this.winCount = 0;
    this.spacesTaken = [];
  }

  placeToken(player, game, space) {
    game.blockedSpaces += 1;
    game.availableSpaces -= 1;
    for (var i = 0; i < game.allSpaces.length; i++) {
      if (game.allSpaces[i] == space) {
        game.allSpaces.splice(i, 1);
      }
    }
    this.spacesTaken.push(space);
  }
};

// module.exports = Player;
