var nthFibonacci = function(n) {  
  if(n === 0) return 0;
  if(n === 1) return 1;
  var first = 1;
  var second = 1;
  for (var i = 0; i < n -1; i++){
    var junk = first;
    first = second;
    second = junk + second;
  }

  return first;
};