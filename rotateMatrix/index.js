function rotateMatrix (matrix) {
  var length = matrix.length - 1;
  var output = [];
  var offset = 0;
  for (var i = 0; i < length + 1; i++){
    output.push([]);
  }

  if(length === 3 || length === 2) {
    for (var i = 0; i < matrix.length; i++) {
      for (var j = 0; j < matrix[i].length; j++) {
        console.log("matrix[i][j]", matrix[i][j])
        if(j === 0) {
          output[0 + offset][length - i + offset] = matrix[i][j];
        } else if (i === 0) {
          output[j + offset][length + offset] = matrix[i][j];
        } else if (j === length) {
          output[length + offset][length - i + offset] = matrix[i][j];
        } else if (i === length) {
          output[j + offset][0 + offset] = matrix[i][j];
        }
        
      }
    }
    matrix = trimMatrix(matrix);
    length -= 2;
    offset = 1;
    
  } 
  
  if ( length === 1){
    for (var i = 0; i < matrix.length; i++) {
      for (var j = 0; j < matrix[i].length; j++) {
        if(j === 0) {
          output[0 + offset][length - i + offset] = matrix[i][j];
        } else if (i === 0) {
          output[j + offset][length + offset] = matrix[i][j];
        } else if (j === length) {
          output[length + offset][length - i + offset] = matrix[i][j];
        } else if (i === length) {
          output[j + offset][0  + offset] = matrix[i][j];
        }
      }
    }
  }
  if(length === 0){
    output[offset][offset] = matrix[0][0];
  }
  
  return output;
  
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