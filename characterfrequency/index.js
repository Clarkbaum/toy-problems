function characterFrequency (string) {
  var output = [];
  for(var i = 0; i < string.length; i++){
    var inOutput = []
    for(var j = 0; j < output.length; j++){
      if(output[j][0] === string[i]){
        inOutput = [true, j];
      }
    }
    inOutput[0] ? output[inOutput[1]][1]++ : output.push([string[i], 1])
  }

  output.sort((a,b) =>{
    if(b[1] - a[1] === 0){
      if(b[0] > a[0]) return -1;
      if(b[0] < a[0]) return 1;
    }else{
      return b[1] - a[1];
    }
  })
  
  return output;
}