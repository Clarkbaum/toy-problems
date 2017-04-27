function findEven (numbers) {
  var output = [];
  for(var i = 0; i < numbers.length; i++){
    if(numbers[i] % 2 === 0){
      output.push(numbers[i]);
    }
  }
  return output;
}