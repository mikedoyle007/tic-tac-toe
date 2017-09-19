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

const displayBoard = () => {
  console.log(s1 + s2 + s3);
  console.log(line);  
  console.log(s4 + s5 + s6);
  console.log(line);  
  console.log(s7 + s8 + s9);  
}
displayBoard();