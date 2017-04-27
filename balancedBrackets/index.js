function isBalanced (str) {
  var output = true
  var bracketStack = [];
  strArr = str.split("");
  strArr.forEach(item => {
    if (item === '(' || item === '{' || item === '['){
      bracketStack.push(item);
    }else if (item === ')' || item === '}' || item === ']'){
      if(!matching(bracketStack.pop(), item)) output = false;
    }
  })
  
  if(bracketStack.length === 0){
    output = output && true;
  }else {
    output = output && false;
  }
  
  return output;
}

function matching(popped, item){
  if(popped === '['){
    return item === ']' ? true : false;
  }else if(popped === '{'){
    return item === '}' ? true : false;
  }else if(popped === '('){
    return item === ')' ? true : false;
  }
}