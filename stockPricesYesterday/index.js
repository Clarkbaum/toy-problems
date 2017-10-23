//Note this was tested on codepen were its connected to a simple html doc with a single p tag with "output" id

var stockPricesYesterday = [10, 9, 13, 44, 9, 1,2,18,2,1];
var differenceArr = [];

function getMaxProfit () {
  if (stockPricesYesterday.length < 2) {
    throw new Error("Getting profit requires at least 2 prices");
  }
  
  for (var i = 0; i < stockPricesYesterday.length - 1; i++) {
    var difference = largestToRight(stockPricesYesterday.slice(i + 1)) - stockPricesYesterday[i];
    differenceArr.push(difference);
  }
  
  var output =  differenceArr.reduce(function(a,b) {
    return Math.max(a, b)
  })

  if(output < 0 ) {output = 0}
  
  document.getElementById("output").innerHTML = output;
  
}

function largestToRight (arr) {
  var max = arr.reduce(function(a, b) {
    return Math.max(a, b)
  });
  return max;
}

