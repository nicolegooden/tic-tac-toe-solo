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

  it('should have 9 spaces on the board', function() {
    var game1 = new Game();

    assert.equal(game1.spaces, 9);
  });

  // it('should take 2 players as arguments') ... is this test necessary?

  it('should track game data', function() {
    var playerOne = new Player(1, 'normal berner', 0);
    var playerTwo = new Player(2, 'berner tongue', 4);

  });

  it('should track whose turn it is', function() {
    var playerOne = new Player(1, 'normal berner', 0);
    var playerTwo = new Player(2, 'berner tongue', 4);

    assert.equal(playerOne.hasCurrentTurn, false);

    playerOne.placeToken();

    assert.equal(playerOne.hasCurrentTurn, true);
    //add a hasNextTurn property in the Player constructor???
  });

  it('should check the board for win conditions', function() {
    var playerOne = new Player(1, 'normal berner', 0);
    var playerTwo = new Player(2, 'berner tongue', 4);
    var game1 = new Game();

    game1.checkForWin(playerOne);
    playerOne.gainWin();

    assert.equal(playerOne.winCount, 1);
    assert.equal(playerTwo.winCount, 4);
  });

  it('should check the board for draw conditions', function() {
    var playerOne = new Player(1, 'normal berner', 0);
    var playerTwo = new Player(2, 'berner tongue', 4);
    var game1 = new Game();

    game1.detectDraw();

    assert.equal(playerOne.winCount, 0);
    assert.equal(playerTwo.winCount, 4);
  });

  it('should reset the board to start a new game', function() {
    var playerOne = new Player(1, 'normal berner', 0);
    var playerTwo = new Player(2, 'berner tongue', 4);
    var game1 = new Game();

    assert.equal(game1.readyToReset, false);

    game1.checkForWin(playerOne);
    playerOne.gainWin();

    assert.equal(playerOne.winCount, 1);
    assert.equal(playerTwo.winCount, 4);

    assert.equal(game1.readyToReset, true);

    resetBoard(game);

    assert.equal(game1.availableSpaces, 9);
  });
});
