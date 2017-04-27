function countIslands (mapStr) {
  var mapArr = mapStr.split("\n");
  var marked = [0,0,0,0,0,0,0,0];
  var count = 0;
  mapArr.forEach(item => {
    var oldMarked = marked.slice();
    for (var i = 0; i < item.length; i++) {
      if (marked[i] === 0 && item[i] === '0' && item[i - 1] !== '0' ) count++
      item[i] === '0' ? marked[i] = 1 : marked[i] = 0
      if (oldMarked[i] === 1 && oldMarked[i - 1] === 0 && marked[i - 1] === 1 && marked[i] === 1) count--
    }
  
  });
  return count;
}