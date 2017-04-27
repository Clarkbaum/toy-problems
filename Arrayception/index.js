function arrayception (array) {
  var depth = 0
  var lastNumDepth = 0;

  var search = function (array, depth) {

    if (array.length === 0) {
      return lastNumDepth;
    } else if (typeof array === 'number') {
      if (lastNumDepth < depth) { lastNumDepth = depth; }
      return lastNumDepth;
    } else {
      depth += 1;
      for (var i = 0; i < array.length; i++) {
        var output = search(array[i], depth)
      }
      return output;
    }
    
  };
  
  return search (array, depth);
}