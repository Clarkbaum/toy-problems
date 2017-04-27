function bubbleSort (input) {
  var loopContinue = true;
  var i = 0;
  var swap = false;

  while(loopContinue){

    var curr = input[i];
    var next = input[i + 1];
    if(curr > next){
      swap = true;
      input[i] = next;
      input[i + 1] = curr;
    }
    if(i === input.length - 1 && swap === false){
      loopContinue = false;
    }
    if(i === input.length - 1 && swap){
      i = -1;
      swap = false;
    }
    
    i++;
  }
  return input;
}