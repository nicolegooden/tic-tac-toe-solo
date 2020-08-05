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
___

## Goals

Many of my goals included, but were not limited to:

+ Follow the Single Responsibility Principle (SRP) of developing and writing code
+ Intentionally distinguish between the data model and the DOM, both in code and in explanation
+ Write DRY code as often as possible
+ Implement local storage and JSON to persist player data
+ Limit global variables
+ Use arguments and parameters to ensure code is dynamic
___

## Features

#### Players Switch Turns

#### Game is Won

#### Game Ends in tie

#### Maintain Records on Reload

#### Auto Restart on Game End

#### Board - Only Click Here on Your Turn  





## Challenges (in detail)


## Problem-Solving Strategies

+ Pseudocode - particularly in the InVision board which details the required functionality in `main` and the required methods and properties of the Game and Player objects.

+ Chrome Debugger - this has been my most reliable source of debugging my application.  On numerous occasions, I had been able to add breakpoints where I suspected a bug had evolved.  These breakpoints allowed me to track the values of variables as I stepped into functions, determine how conditionals were being evaluated, decide where a function or method was overriding what I ultimately expected to see upon an event, et cetera.  It was so valuable for me to go step-by-step in the functionality to not only identify where the bug existed, but also to gain a deeper conceptual understanding of how my code was performing.

+ Console Log - this was used more often in the early phases of developing the application, particularly when checking for win and tie conditions in the test files and the console.  For instance, I added `console.log()` to be executed if certain win conditions evaluated to true, which helped me determine if the conditions were met by either player.  

## Wins

## Next Steps
