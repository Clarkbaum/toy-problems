function insertionSort (array) {
  var sortedArr = [];
  array.forEach(item =>{ insertVal(sortedArr, item); });
  return sortedArr;
}

function insertVal(array, val){
  var index = null;
  for(var i = 0; i < array.length; i++){
    if(array.length === 0){
      array.push(val);
      return array;
    }
    if(array[i].value <= val.value && array[i + 1] === undefined){
      array.push(val);
      return array;
    }else if(array[i].value <= val.value && array[i + 1].value >= val.value){
      index = i + 1;
    }
  }
  array.splice(index, 0, val);
  return array;
}