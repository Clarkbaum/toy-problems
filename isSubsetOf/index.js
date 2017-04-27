// Array.prototype.isSubsetOf = function(input){
//   //context.isSubsetOf(input);
//   var result = true;
//   this.forEach(function(item){
//     if(input.indexOf(item) !== -1){
//       //if item is inside input
//       result = result && true;
//     }else{
//       result = false;
//     }
//   });
//   return result;
// }

Array.prototype.isSubsetOf = function(input){
  let result = true;
  this.forEach(item => input.indexOf(item) !== -1 ? result = result && true : result = false);
  return result;
}