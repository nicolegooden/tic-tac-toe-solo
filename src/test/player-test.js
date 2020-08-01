var assert = require('chai').assert;
var Player = require('../player.js');

//to test in terminal, use this command from top level directory: npm test ./src/test/player-test.js

describe('Player', function() {

  it('should be a function', function() {

    assert.isFunction(Player);
  });

  it('should instantiate a player', function() {
    var playerOne = new Player();

    assert.instanceOf(playerOne, Player);
  });

  it('should instantiate more than one player', function() {
    var playerOne = new Player();
    var playerTwo = new Player();

    assert.instanceOf(playerOne, Player);
    assert.instanceOf(playerTwo, Player);
  });

  it('should have an id, token, and record of wins', function() {
    var playerOne = new Player(1, 'berner tongue', 2);
    var playerTwo = new Player(2, 'normal berner', 1);

    assert.equal(playerOne.id, 1);
    assert.equal(playerOne.token, 'berner tongue');
    assert.equal(playerOne.winCount, 2);

    assert.equal(playerTwo.id, 2);
    assert.equal(playerTwo.token, 'normal berner');
    assert.equal(playerTwo.winCount, 1);
  });

  it('should track wins for a player based on game outcome', function() {
    var playerOne = new Player(1, 'berner tongue', 2);

    playerOne.gainWin();

    assert.equal(playerOne.winCount, 3);
  });

  it('should track wins for more than one player based on game outcome', function() {
    var playerOne = new Player(1, 'berner tongue', 2);
    var playerTwo = new Player(2, 'normal berner', 1);

    playerOne.gainWin();
    playerTwo.gainWin();

    assert.equal(playerOne.winCount, 3);
    assert.equal(playerTwo.winCount, 2);
  });

    //add test for saveWinsToStorage() method for local storage
    //add test for retrieveWinsFromStorage() method for local storage

  it('should have zero tokens on the board by default', function() {
    var playerOne = new Player(1, 'berner tongue', 2);
    var playerTwo = new Player(2, 'normal berner', 1);

    assert.equal(playerOne.tokensOnBoard, 0);
    assert.equal(playerTwo.tokensOnBoard, 0);
  });

  it('should track number of tokens on game board', function() {
    var playerOne = new Player(1, 'berner tongue', 2);
    var playerTwo = new Player(2, 'normal berner', 1);

    playerOne.placeToken();

    assert.equal(playerOne.tokensOnBoard, 1);
  });

  it('should not have enough tokens by default', function() {
    var playerOne = new Player(1, 'berner tongue', 2);
    var playerTwo = new Player(2, 'normal berner', 1);

    assert.equal(playerOne.hasEnoughTokens, false);
    assert.equal(playerTwo.hasEnoughTokens, false);
  })

  it('should verify if player has enough tokens on board to win', function() {
    var playerOne = new Player(1, 'berner tongue', 2);
    var playerTwo = new Player(2, 'normal berner', 1);

    playerOne.placeToken();
    playerTwo.placeToken();
    playerOne.placeToken();

    assert.equal(playerOne.hasEnoughTokens, false);

    playerTwo.placeToken();
    playerOne.placeToken();

    assert.equal(playerOne.tokensOnBoard, 3);
    assert.equal(playerTwo.tokensOnBoard, 2);
    assert.equal(playerOne.hasEnoughTokens, true);
  });
});
