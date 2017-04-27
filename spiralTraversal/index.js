function spiralTraversal (matrix) {
  var output = [];
  if(matrix.length === 1){
    return matrix[0];
  }
  var recursion = function (matrix) {
    for (var i = 0; i < matrix.length; i++){
      var lastArr = [];
      for (var j = 0; j < matrix[i].length; j++){
        if(i === 0){
          output.push(matrix[i][j]);
        } else if (i !== matrix.length - 1){
          output.push(matrix[i][matrix[i].length - 1]);
          break;
        } else if (i === matrix.length - 1){
          lastArr.push(matrix[i][j])
        }
        
      }
      lastArr.reverse();
      output = output.concat(lastArr);
    }
    if(matrix[0].length !== 1){
      for (var i = matrix.length - 2; i >= 1; i--){
        var lastArr = [];
        for (var j = 0; j < matrix[i].length; j++){
          if (i !== matrix.length - 1){
            output.push(matrix[i][0]);
            break;
          }
          
        }
      }
    }
    var trimedMatrix = trimMatrix(matrix)
    if(trimedMatrix.length > 0){
      if(trimedMatrix[0].length !== 0){
        recursion(trimedMatrix);
      } else {
        return;
      }
    }
  }
  
  recursion(matrix)
  return output
}

function trimMatrix (matrix){
  if(matrix.length === 2) return false;
 
  output = matrix.slice()
  output.pop();
  output.shift();
  output.forEach(function(item){
    item.pop();
    item.shift();
  })
  
  return output;
}