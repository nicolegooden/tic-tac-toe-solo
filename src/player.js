class Player {
  constructor(id, token) {
    this.id = id;
    this.token = token;
    this.winCount = 0;
    this.spacesTaken = [];
  }

  placeToken(player, game, space) {
    var mySpace = parseInt(space);
    game.blockedSpaces += 1;
    game.availableSpaces -= 1;
    for (var i = 0; i < game.allSpaces.length; i++) {
      if (game.allSpaces[i] == mySpace) {
        game.allSpaces.splice(i, 1);
      }
    }
    this.spacesTaken.push(mySpace);
  }
};

// module.exports = Player;
