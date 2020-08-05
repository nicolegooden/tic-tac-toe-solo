# Tic Tac Toe - Solo
___

A front-end application designed and built by [Nicole Gooden](https://github.com/nicolegooden).
To view the application in the browser, please `clone` this repository and use `open index.html` in the terminal.
___

## Project Overview

This project is aptly named *Tic Tac Toe*.  It is a user-friendly game through which two players can take turns placing tokens on the board.  When either player places three tokens in a single row, column, or diagonal pattern, the winner is announced, a point is awarded to the winner, and a new game begins.  Nearly the same outcome is true for a tie situation, except none of the players show an increase in score and a tie message is displayed.  In either case, the two players get a chance to redeem themselves in yet another fresh game.

The required technologies include HTML, CSS, and JavaScript.  A large portion of this project is dependent upon the data model and the Document Object Model (DOM).  The data model consists of two player objects instantiated from the Player class and a game object instantiated from the Game class.  The Player object is responsible for various properties, saving player wins to local storage, and retrieving wins from local storage.  Each player also has a unique `spacesTaken[]` array, which is updated as the respective player places a token on the game board.  The Game object is responsible for various properties, tracking which player's turn it is to make a move, placing the appropriate player token on the board in the correct spot, checking for win and tie conditions, and reseting the game upon end.  As tokens are placed on the board, the Game object's `allSpaces[]` array experiences the removal of the space number, where the token has been placed.  The Game object's `checkForWins()` method confirms if a player's array contains a winning set of space numbers.  The Game object's `detectDraw()` method checks for draw conditions if a win has not been detected for either player.  There are other data model properties and methods that are not explicitly mentioned here, but they can be found in the `src` directory in this repository.  

The Document Object Model takes on the role of providing the user experience as soon as the app loads for the first time.  Everything the user sees and interacts with is part of the DOM display.  All DOM-related code exists in `main.js`, including but not limited to the following functionality:

+ Displaying whose turn it is  
+ Determining whose token is placed when the board is clicked
+ Ensuring that an unintended click will not change the course of the game
+ Displaying the winner or the tie statement
+ Showing the token images
+ Providing the win count per player, and updating it after each game ends
+ Clearing the board
+ Many more!

Local storage and JSON are used to persist players' win counts on page reload or refresh.  When the application is initially opened in the browser, each player will have zero wins.  After that, if any wins have been earned and the page is reloaded, the win count will remain the same.  The only way to clear the win count and start anew is to call `localStorage.clear()` in the console.
