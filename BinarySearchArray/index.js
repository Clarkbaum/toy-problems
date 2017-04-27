function binarySearch (array, target) {
  var found = -1;
  var search = function(array, target, offset){
    var middleIndex = Math.floor((array.length - 1 ) / 2)
    if (target === array[middleIndex]) {
      found = middleIndex + offset;
    } else if (target > array[middleIndex]) {
      found = search(array.slice(middleIndex + 1), target, offset + middleIndex + 1)
    } else if (target < array[middleIndex]) {
      found = search(array.slice(0, middleIndex), target, offset)
    }
    
    return found;
  }
  return search(array, target, 0)
}