function filterLength (length, array) {
  var output = [];
  for(var i = 0; i < array.length; i++){
    if(array[i].length >= length){
      output.push(array[i]);
    }
  }
  return output;
}

//non mutative recursion
function filterLength(length, array){
  var output = [];
  
  var search = function(item){
    if(item.length >= 1){
      if(item[0].length >= length){
        output.push(item[0]);
      }if(item.length !== 0){
        search(item.slice(1))
      }
    }
  }
  
  search(array);
  return output;
}