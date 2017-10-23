var stockPricesYesterday = [10, 7, 5, 8, 11, 9];
var differenceArr = [];

function getMaxProfit () {
  document.getElementById("output").innerHTML = Math.PI;
  for (var i = 0; i < stockPricesYesterday.length - 1; i++) {
    var difference = largestToRight(stockPricesYesterday.slice(i + 1)) - stockPricesYesterday[i];
    differenceArr.push(difference);
  }
  
  var output =  differenceArr.reduce(function(a,b) {
    return Math.max(a, b)
  })
  
  document.getElementById("output").innerHTML = output;
  
}

function largestToRight (arr) {
  var max = arr.reduce(function(a, b) {
    return Math.max(a, b)
  });
  return max;
}
