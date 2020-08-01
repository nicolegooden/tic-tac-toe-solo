var assert = require('chai').assert;
var Player = require('../player.js');
var Game = require('../game.js');

//to test in terminal, use this command from top level directory: npm test ./src/test/game-test.js

describe('Game', function() {

  it('should be a function', function() {

    assert.isFunction(Game);
  });

  it('should instantiate a game', function() {
    var game1 = new Game();

    assert.instanceOf(game1, Game);
  });

  it('should instantiate another game', function() {
    var game2 = new Game();

    assert.instanceOf(game2, Game);
  });

  it('should instantiate 2 players, each with an id, token, and win count', function() {
    var playerOne = new Player(1, 'normal berner', 0);
    var playerTwo = new Player(2, 'berner tongue', 4);

    assert.equal(playerOne.id, 1);
    assert.equal(playerOne.token, 'normal berner');
    assert.equal(playerOne.winCount, 0);

    assert.equal(playerTwo.id, 2);
    assert.equal(playerTwo.token, 'berner tongue');
    assert.equal(playerTwo.winCount, 4);
  });

  it('should take 2 players as arguments', function() {
    var playerOne = new Player(1, 'normal berner', 0);
    var playerTwo = new Player(2, 'berner tongue', 4);
    var game1 = new Game(playerOne, playerTwo);

    assert.equal(game1.playerOne, playerOne);
    assert.equal(game1.playerTwo, playerTwo);
  });

  it('should have 9 spaces on the board when new game begins', function() {
    var game1 = new Game();

    assert.equal(game1.availableSpaces, 9);
  });

  it('should track whose turn it is', function() {
    var playerOne = new Player(1, 'normal berner', 0);
    var playerTwo = new Player(2, 'berner tongue', 4);
    var game1 = new Game();

    assert.equal(playerOne.hasCurrentTurn, false);

    playerOne.placeToken(playerOne, game1);

    assert.equal(game1.blockedSpaces, 1);
    assert.equal(playerOne.hasCurrentTurn, true);
  });

  it('should check the board for win conditions', function() {
    var playerOne = new Player(1, 'normal berner', 0);
    var playerTwo = new Player(2, 'berner tongue', 4);
    var game1 = new Game(playerOne, playerTwo);

    game1.playerOne.placeToken(playerOne, game1, 2);

    assert.equal(game1.allSpaces.length, 8);
    assert.equal(playerOne.spacesTaken.length, 1);
    assert.equal(playerOne.spacesTaken[0], 2);

    game1.playerTwo.placeToken(playerTwo, game1, 9);
    game1.playerOne.placeToken(playerOne, game1, 3);
    game1.playerTwo.placeToken(playerTwo, game1, 8);

    assert.equal(game1.allSpaces.length, 5);
    assert.equal(playerOne.spacesTaken.length, 2);
    assert.equal(playerTwo.spacesTaken.length, 2);
    assert.deepEqual(playerOne.spacesTaken, [2, 3]);
    assert.deepEqual(playerTwo.spacesTaken, [9, 8]);

    game1.playerOne.placeToken(playerOne, game1, 1);

    assert.deepEqual(playerOne.spacesTaken, [2, 3, 1]);

    game1.checkForWin(playerOne);
    game1.checkForWin(playerTwo);

    assert.equal(playerOne.winCount, 1);
    assert.equal(playerTwo.winCount, 4);
  });

  it('should check the board for draw conditions', function() {
    var playerOne = new Player(1, 'normal berner', 0);
    var playerTwo = new Player(2, 'berner tongue', 4);
    var game1 = new Game(playerOne, playerTwo);

    game1.playerOne.placeToken(playerOne, game1, 1);

    assert.equal(game1.allSpaces.length, 8);
    assert.equal(playerOne.spacesTaken.length, 1);
    assert.equal(playerOne.spacesTaken[0], 1);

    game1.playerTwo.placeToken(playerTwo, game1, 2);
    game1.playerOne.placeToken(playerOne, game1, 7);
    game1.playerTwo.placeToken(playerTwo, game1, 3);
    game1.playerOne.placeToken(playerOne, game1, 5);
    game1.playerTwo.placeToken(playerTwo, game1, 9);
    game1.playerOne.placeToken(playerOne, game1, 6);
    game1.playerTwo.placeToken(playerTwo, game1, 4);
    game1.playerOne.placeToken(playerOne, game1, 8);

    game1.checkForWin(playerOne);
    game1.checkForWin(playerTwo);

    assert.equal(playerOne.winCount, 0);
    assert.equal(playerTwo.winCount, 4);

    game1.detectReset();

    assert.equal(game1.hasEnded, true);
    assert.equal(game1.availableSpaces, 9);
    assert.equal(game1.blockedSpaces, 0);
  });

  it('should be ready to reset the board when game ends', function() {
    var playerOne = new Player(1, 'normal berner', 0);
    var playerTwo = new Player(2, 'berner tongue', 4);
    var game1 = new Game(playerOne, playerTwo);

    assert.equal(game1.readyToReset, false);

    game1.playerOne.placeToken(playerOne, game1, 3);

    assert.equal(game1.allSpaces.length, 8);
    assert.equal(playerOne.spacesTaken.length, 1);
    assert.equal(playerOne.spacesTaken[0], 3);

    game1.playerTwo.placeToken(playerTwo, game1, 9);
    game1.playerOne.placeToken(playerOne, game1, 5);
    game1.playerTwo.placeToken(playerTwo, game1, 8);
    game1.playerOne.placeToken(playerOne, game1, 7);

    game1.checkForWin(playerOne);
    game1.checkForWin(playerTwo);

    assert.equal(playerOne.winCount, 1);
    assert.equal(playerTwo.winCount, 4);

    game1.detectReset();

    assert.equal(game1.hasEnded, true);
    assert.equal(game1.availableSpaces, 9);
    assert.equal(game1.blockedSpaces, 0);
    assert.equal(game1.readyToReset, true);
  });
});
