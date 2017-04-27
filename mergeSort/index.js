function mergeSort(arr) {
  var newArr = [];
  if(arr.length === 1) return arr;
  arr.forEach(function(item) {
    newArr.push([item]);
  });
  //merge time
  for(var j = 0; j < arr.length / 2 ; j ++){
    for(var i = 0; i < newArr.length; i++) {
      if(newArr[i + 1] === undefined) continue;
      if(newArr[i] > newArr[i + 1]){
        newArr[i] = mergeArr(newArr[i + 1], newArr[i])
      }else{
        newArr[i] = mergeArr(newArr[i], newArr[i + 1])
      }
      newArr.splice(i + 1, 1);
    }
  }
  return newArr[0];
}

function mergeArr(arr1, arr2){
  var one = 0, two = 0;
  var output = [];
  for(var i = 0; i < arr1.length + arr2.length; i++){
    if(arr1[one] <= arr2[two] || arr2[two] === undefined){
      output.push(arr1[one]);
      one++;
    }else{
      output.push(arr2[two]);
      two++;
    }
  }
  return output;
}