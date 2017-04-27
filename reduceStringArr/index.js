function concatStrings (strings) {
  var output = '';
  for(var i = 0; i < strings.length; i++){
    output = output + "" + strings[i];
  }
  return output;
}


//i need reduce practice
function concatStrings(strings){
  return strings.reduce(function(accum, curr){
    return accum + curr;
  }, '');
}