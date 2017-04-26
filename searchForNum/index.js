function findDivisible (divider, array) {
  var result = false;
  for(var i = 0; i < array.length; i++){
    console.log("array[i] % divider: ", array[i] % divider)
    if(array[i] % divider === 0 && array[i] !== 0){
      console.log("test")
      result =  true;
    }
  }
  
  return result;
}

//non-mutative recursion way of doing its

function findDivisible(divider, array){
  var result = false;
  
  var search = function(item){
    if(item[0] % divider === 0 && item[0] !== 0){
      return result = true;
    }else if(item.length !== 0){
      search(item.slice(1));
    }
  }
  
  search(array);
  return result;
}