// function isBalanced (str) {
//   var output = true
//   var bracketStack = [];
//   strArr = str.split("");
//   strArr.forEach(item => {
//     if (item === '(' || item === '{' || item === '['){
//       bracketStack.push(item);
//     }else if (item === ')' || item === '}' || item === ']'){
//       if(!matching(bracketStack.pop(), item)) output = false;
//     }
//   })

//   if(bracketStack.length === 0){
//     output = output && true;
//   }else {
//     output = output && false;
//   }

//   return output;
// }

// function matching(popped, item){
//   if(popped === '['){
//     return item === ']' ? true : false;
//   }else if(popped === '{'){
//     return item === '}' ? true : false;
//   }else if(popped === '('){
//     return item === ')' ? true : false;
//   }
// }

//2021 attempt

let isBalanced = (str) => {
  let output = true;
  let stack = [];
  for (char of str) {
    if (char === '(' || char === '{' || char === '[') {
      stack.push(char);
    } else if (char === ')' || char === '}' || char === ']') {
      let popped = stack.pop();
      if (!matching(popped, char)) {
        output = false;
      }
    }
  }

  return output;
}

let matching = (popped, char) => {
  if (popped === '(') {
    return char === ')'
  } else if (popped === '{') {
    return char === '}'
  } else if (popped === '[') {
    return char === ']'
  }
}

console.log(isBalanced("[{{()}]}()"))