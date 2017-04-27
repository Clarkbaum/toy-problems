function longestPalindrome (string) {
  var output = []
  var palindrome = []
  for (var k = 0; k < string.length; k++){
    var stack = [];
    for (var i = k; i < string.length; i++) {
      if(string[i] !== stack[0]) {
        stack.push(string[i])
      }else{
        palindrome = stack.slice();         
        stack.push(string[i])
        palindrome.push(string[i])            
        if(checkPalendrome(palindrome)) output.push(palindrome);
      }
    }
  }
  
  return output.sort(function(a, b){
    return b.length - a.length
  })[0].join('')

}

function checkPalendrome(string){
  var output = true;
  for (var i = 0; i < string.length; i++) {
    string[i] === string[string.length - 1 - i] ? output = output && true : output = output && false
  }
  
  return output;
}