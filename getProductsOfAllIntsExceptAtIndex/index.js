//Note this was tested on codepen were its connected to a simple html doc with a single p tag with "output" id


function getProductOfAllIntsExceptAtIndex () {
  var input = [1 ,7 ,3, 4, 2];
  var output = [];
  for (var i = 0; i < input.length; i++) {
    output.push(products(input, i));
  }
  document.getElementById("output").innerHTML = output;
}
  
function products (input, i) {  
  var prod = 1;
  for (var j = 0; j < input.length; j++) {
    if(j !== i) {
      prod = prod * input[j];
    }
  }
  return prod;
}