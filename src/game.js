class Game {
  constructor(playerOne, playerTwo, player1Turn, player2Turn) {
    this.playerOne = playerOne;
    this.playerTwo = playerTwo;
    this.availableSpaces = 9;
    this.blockedSpaces = 0;
    this.allSpaces = [0, 1, 2, 3, 4, 5, 6, 7, 8];
    this.hasEnded = false;
    this.player1Turn = player1Turn;
    this.player2Turn = player2Turn;
  }

  placeToken(player, space) {
    var mySpace = parseInt(space);
    this.blockedSpaces += 1;
    this.availableSpaces -= 1;
    for (var i = 0; i < this.allSpaces.length; i++) {
      if (this.allSpaces[i] == mySpace) {
        this.allSpaces.splice(i, 1);
      }
    }
    player.spacesTaken.push(mySpace);
  }

  checkForWin(player) {
    if (player.spacesTaken.includes(0) && player.spacesTaken.includes(1) && player.spacesTaken.includes(2)) {
      player.winCount += 1;
      player.hasVictory = true;
      return this.hasEnded = true;
    }
    if (player.spacesTaken.includes(3) && player.spacesTaken.includes(4) && player.spacesTaken.includes(5)) {
      player.winCount += 1;
      player.hasVictory = true;
      return this.hasEnded = true;
    }
    if (player.spacesTaken.includes(6) && player.spacesTaken.includes(7) && player.spacesTaken.includes(8)) {
      player.winCount += 1;
      player.hasVictory = true;
      return this.hasEnded = true;
    }
    if (player.spacesTaken.includes(0) && player.spacesTaken.includes(3) && player.spacesTaken.includes(6)) {
      player.winCount += 1;
      player.hasVictory = true;
      return this.hasEnded = true;
    }
    if (player.spacesTaken.includes(1) && player.spacesTaken.includes(4) && player.spacesTaken.includes(7)) {
      player.winCount += 1;
      player.hasVictory = true;
      return this.hasEnded = true;
    }
    if (player.spacesTaken.includes(2) && player.spacesTaken.includes(5) && player.spacesTaken.includes(8)) {
      player.winCount += 1;
      player.hasVictory = true;
      return this.hasEnded = true;
    }
    if (player.spacesTaken.includes(0) && player.spacesTaken.includes(4) && player.spacesTaken.includes(8)) {
      player.winCount += 1;
      player.hasVictory = true;
      return this.hasEnded = true;
    }
    if (player.spacesTaken.includes(2) && player.spacesTaken.includes(4) && player.spacesTaken.includes(6)) {
      player.winCount += 1;
      player.hasVictory = true;
      return this.hasEnded = true;
    }
    this.hasEnded = false;
  }

  detectDraw() {
    if ((this.hasEnded) || (this.availableSpaces === 0) || (this.blockedSpaces === 9)) {
      this.hasEnded = true;
    }
  }

  resetGame(player1, player2) {
    player1.spacesTaken = [];
    player2.spacesTaken = [];
  }
};
