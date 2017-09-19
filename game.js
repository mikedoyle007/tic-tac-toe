// board
let s1 = '1 |';
let s2 = ' 2 |';
let s3 = ' 3  ';

let s4 = '4 |';
let s5 = ' 5 |';
let s6 = ' 6  ';

let s7 = '7 |';
let s8 = ' 8 |';
let s9 = ' 9  ';

const line = '---------';

// show the board to the players
const displayBoard = () => {
  console.log(s1 + s2 + s3);
  console.log(line);  
  console.log(s4 + s5 + s6);
  console.log(line);  
  console.log(s7 + s8 + s9);  
}

// all possible winning scenarios
const winPosibilities = [[1, 2, 3,], [4, 5, 6], [7, 8, 9], [1, 4, 7], [2, 5, 8], [3, 6, 9], [1, 5, 9], [3, 5, 7]];

// notify player of their turn
const displayTurnMessage = (player) => {
  console.log('Turn: ', player);
}

// let currentPlayer take a turn
const takeTurn = (space) => {
  while (!space) {
  } 
  console.log('space = ', space);
  return;
}

// keep track of current turns
let currentPlayer = 'X';

// keep track of if the game is still being played
let won = false;

// need way to store each players moves
let playerX = [];
let playerY = [];

// determine if the player has won
const hasWon = (player) => {
  // compare player's array to the winPosibilities array
  // return true or false
}

// toggle player
const updateCurrentPlayer = () => {
  if (currentPlayer === 'X') {
    currentPlayer = 'O';
  } else {
    currentPlayer = 'X';
  }
}

// start game
const initGame = () => {
  currentPlayer = 'X';
  won = false;
  
  displayBoard();
  // displayTurnMessage('X');

  // wait for player response while no winners
  while (!won) {
    //
    // let player take a turn
    takeTurn();
    // update board
    // render board
    // check if player has won game
    if (hasWon(currentPlayer)) {
      // if yes
      //    display player won message
      console.log(`Congratulations! Player ${currentPlayer} has won!`);
      won = true;
    } else {
      // if no
      //    update turn
      //    display player turn message
      updateCurrentPlayer();
      displayTurnMessage(currentPlayer);
    }
  }
  console.log('Goodbye');
}

initGame();