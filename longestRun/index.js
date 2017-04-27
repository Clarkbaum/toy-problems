function longestRun (string) {
  var outputStack = [];
  var backStack = [];
  var highestNum = {
    num: '',
    first: '',
    last: ''
  }
  if(string === ''){
    return [0,0];
  } 
  for (var i = 0; i < string.length; i++) {
    if(outputStack.length === 0 || outputStack[outputStack.length - 1][0] === string[i]){
      outputStack.push([string[i], i]);
    }else{
      
      backStack.push(...outputStack)
      outputStack = [];

      outputStack.push([string[i], i]);
    }
    if(highestNum.num < outputStack.length) {
      highestNum.num = outputStack.length; 
      highestNum.last = outputStack[outputStack.length - 1][1];
      highestNum.first = outputStack[0][1];
    }

  }

  return [highestNum.first, highestNum.last];
}