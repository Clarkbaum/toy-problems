function quickSort(arr) {
  if(arr.length === 0) return [];
  var search = function(arr){
    var leftSplit = [];
    var rightSplit = [];
    var leftPut = [];
    var rightPut = [];
    var pivot = arr[Math.floor(arr.length/2)];
    for(var i = 0; i < arr.length; i++){
      if(arr[i] <= pivot && i !== arr.indexOf(pivot)) leftSplit.unshift(arr[i]);
        
      if(arr[i] > pivot) rightSplit.unshift(arr[i]);
    }
    if(leftSplit.length !== 0) leftPut = search(leftSplit);

    if(rightSplit.length !== 0) rightPut = search(rightSplit);

    if(leftPut.length + rightPut.length === arr.length - 1) return leftPut.concat(pivot, rightPut)
  
    return leftSplit.concat(pivot, rightSplit);
  }
  return search(arr);
}