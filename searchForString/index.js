function searchString (str, array) {
  var result = false;

  for( var i = 0; i < array.length; i++){
    if (array[i] === str){
      result = true;
    }
  }
  
  return result;
}

//non-mutative recursion way of doing it

function searchString(str, array){
  var result = false;
  var search = function(item){
    //first item keeps changing each iteration
    if(str === item[0]){
      return result = true;
    }else if(item.length !== 0 ){
      console.log("item: ", item)
      search(item.slice(1))
    }
  }
  
  search(array);
  return result;
}