function concatArrays (arrays) {
  var output = [];
  for (var i = 0; i < arrays.length; i++){
    for(var j = 0; j < arrays[i].length; j++){
      output.push(arrays[i][j]);
    }
  }
  return output;
}

//i need reduce practice
function concatArrays(arrays){
  return arrays.reduce(function(accum, curr){
    accum.push(curr)
  }, [])
}