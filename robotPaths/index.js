function makeBoard(n) {
  var board = [];
  for (var i = 0; i < n; i++) {
    board.push([]);
    for (var j = 0; j < n; j++) {
      board[i].push(false);
    }
  }
  board.togglePiece = function(i, j) {
    this[i][j] = !this[i][j];
  }
  board.hasBeenVisited = function(i, j) {
    return !!this[i][j];
  }
  return board;
}


//so far i step through the grid left to right. then  right to left in a zig zag
//and set all t/f val in board to true. 
//once i hit the end i set count++
//i somehow need to reset the board but also not count the same solution twice
//solution seemd very similar except their recursion part were by themselves outside the if statments
function robotPaths (n) {
  var board = makeBoard(n);
  var count = 0;
  var curr = [0,0]
  if(n === 1) return 1;
  if(n === 2) return 2;
  var recursion = function(board, curr){
    board.togglePiece(...curr)
    console.log(board, curr)
    if (curr[0] === n - 1 && curr[1] === n - 1) {
      count++;
   
    } else { 
      if (curr[1] - 1 >= 0 && !board.hasBeenVisited(curr[0], curr[1] - 1)) { //left
      console.log("up")
        curr[1] = curr[1] -= 1;
        recursion(board, curr);
      }
      //console.log("curr[1] + 1", curr[1] + 1, n -1)
      //console.log("!board.hasBeenVisited(curr[0], curr[1] + 1)", !board.hasBeenVisited(curr[0], curr[1] + 1))
      if (curr[1] + 1 <= n - 1 && !board.hasBeenVisited(curr[0], curr[1] + 1)) { //right
      console.log("down")
        curr[1] = curr[1] += 1;
        recursion(board, curr);
      }
      if (curr[0] - 1 >= 0 && !board.hasBeenVisited(curr[0] - 1, curr[1])) { //up
      console.log("left")
        curr[0] = curr[0] -= 1;
        recursion(board,  curr);
      }
      if (curr[0] + 1 <= n - 1 && !board.hasBeenVisited(curr[0] + 1, curr[1])) { //down
      console.log("right")
        curr[0] = curr[0] += 1;
        recursion(board, curr);
      }
    }
  }
  recursion(board, curr)
  return count
}