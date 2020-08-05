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





## Challenges

+ Local Storage - my first attempt at implementing local storage occurred during this project.  This was a true self-teaching experience.  First, I had to figure out how local storage worked for each Player object.  Then, I was unsure of where to call these methods in the main file.  I realized that the players' wins should be saved to storage before the game is reset or the page reloads, and the players' wins should be retrieved from storage as the page reloads.  I struggled the most when I began instantiating the two players inside of the `startGame()` function.  When I made this change, I noticed a new bug popped up: the players' win counts would show as `null wins` instead of `0 wins`, but would eventually show correctly when each player's win count was greater than zero.  I spent some time in the debugger working through where the problem was occurring, and found that I was always assigning the value of `p1ParsedWins` or `p2ParsedWins`, which was falsey when the app first loaded.  To combat this, I added a ternary in `retrieveWinsFromStorage` so that the value of those parsed wins were either 1) the previously saved win count or 2) if there was not a previously saved win count, a default of zero.  I also assigned the initial value of each player object's `winCount` to the invocation of `retrieveWinsFromStorage`, so that this property would always be assigned to whichever value was returned by the ternary.   
___

## Problem-Solving Strategies

+ Pseudocode - particularly in the InVision board which details the required functionality in `main` and the required methods and properties of the Game and Player objects.

+ Chrome Debugger - this has been my most reliable source of debugging my application.  On numerous occasions, I had been able to add breakpoints where I suspected a bug had evolved.  These breakpoints allowed me to track the values of variables as I stepped into functions, determine how conditionals were being evaluated, decide where a function or method was overriding what I ultimately expected to see upon an event, et cetera.  It was so valuable for me to go step-by-step in the functionality to not only identify where the bug existed, but also to gain a deeper conceptual understanding of how my code was performing.

+ Console Log - this was used more often in the early phases of developing the application, particularly when checking for win and tie conditions in the test files and the console.  For instance, I added `console.log()` to be executed if certain win conditions evaluated to true, which helped me determine if the conditions were met by either player.  

## Wins

## Next Steps

Although this project is considered a success, here are some developer moves I would make in due time:

+ Make the `addToken()` function in `main.js` more dynamic and DRY.  Some minor refactoring was done in an attempt to reach this goal, but I realize it is not yet where it needs to be, as some competitive code remains in the function.  To mitigate this, I plan to shift the responsibility of tracking turns from the Game to the Player.  In this way, the conditional that checks for which player's turn it is based on the game object would not be necessary.  With this shift comes an opportunity to easily pass in arguments of each existing Player to `addToken()`, invoke `placeToken()` with the player passed in as an argument, and insert the HTML for that player's token.  This could reduce about half of the code that makes this functionality happen.   

+ Refactor the Game class's `checkForWins()` method.  This method is not very DRY as it is, and there are some ample opportunities for a solid refactor.  First, I realize I am checking for eight different win conditions, and if any of them evaluate to true, the same three lines of code are executed.  These lines of code are responsible for increasing the current win count, assigning the `hasVictory` property a value of true, and exiting the method with a return of `this.hasEnded = true`.  My idea to reduce some of this code is to create an array of arrays that contain winning combinations.  This way, I could use the method to check for wins against each winning combination at every index in the wins array.  Essentially, my code would be asking "does this index have an array that matches all of my player's taken spaces?"  A `for loop` and a single conditional could accomplish this task with some time permitted to achieve it.  The three lines of code that are executed per win condition being met would then exist just once in the method.
