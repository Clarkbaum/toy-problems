function largestProductOfThree (array) {
  var negatives = [];
  var positives = [];
  var output = [];
  array.sort(function(a,b){return b - a})
  array.forEach(item => item < 0 ? negatives.push(item) : positives.push(item));
  
  negatives.sort(function(a,b){return b - a})
  positives.sort(function(a,b){return a - b})

  output.push(positives[positives.length - 1] * positives[positives.length - 2] * positives[positives.length - 3])
  output.push(negatives[negatives.length - 1] * negatives[negatives.length - 2] * positives[positives.length - 1])
  if(positives.length === 0){
    output.push(negatives[0] * negatives[1] * negatives[2])
  }

  return isNaN(output.sort()[1]) ? output.sort()[0] : output.sort()[1]
}