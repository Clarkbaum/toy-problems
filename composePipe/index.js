var compose = function(){
  var args = Array.prototype.slice.call(arguments);
  return function(result){
    for(var i = args.length - 1; i > - 1;  i--){
      result = args[i].call(this, result);
    }
    return result;
  }
};

var pipe = function(){
  var args = Array.prototype.slice.call(arguments);
  console.log("args", args)
  return function(result){
    for(var i = 0; i < args.length;  i++){
      result = args[i].call(this, result);
    }
    return result;
  }
};