function calculate (inputs) {
  inputArr = inputs.split(" ")
  var numStack = [];
  inputArr.forEach(item =>{
    if(item === "+" || item === "-" || item === "*" || item === "/" ? true : false){
      var firstPop = numStack.pop();
      var secondPop = numStack.pop();
      numStack.push(eval(secondPop + ' ' + item + ' ' + firstPop).toString())
    }else{
      numStack.push(item)
    }
  });
  
  return eval(numStack[0]);
}