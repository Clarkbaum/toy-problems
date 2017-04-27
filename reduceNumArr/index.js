function sum (numbers) {
  var total = 0;
  for(var i = 0; i < numbers.length; i++){
    total = total + numbers[i];
  }
  return total;
}


//reduce solution. i know it says recursion but i dont need recursion practice. i need reduce solution
function sum(numbers){
  return numbers.reduce(function(accumulator, curr){
    return accumulator + curr
  }, 0);
}