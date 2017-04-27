var bind = function(func, context){
  var args = [];
  for(var i = 2; i < arguments.length; i++){
    args.push(arguments[i])
  }

  return function () {
    var argumentArr = Array.prototype.slice.call(arguments);
    return func.apply(context, args.concat(argumentArr));
    
  };
};  

Function.prototype.bind = function(context) {
  var func = this;
  var args = [];

  for(var i = 1; i < arguments.length; i++){
    args.push(arguments[i])
  }
  return function () {
    var argumentArr = Array.prototype.slice.call(arguments);
    return func.apply(context, args.concat(argumentArr));
  };
};