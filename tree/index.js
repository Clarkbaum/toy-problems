var treeMaker = function(value){
  var newTree = Object.create(treeMaker.methods);
  newTree.value = value;
  newTree.children = [];
  return newTree;
};
treeMaker.methods = {};
treeMaker.methods.addChild = function(value){
  var node = treeMaker(value);
  this.children.push(node); 
}
treeMaker.methods.contains = function(value){
  var output = false;
  if (this.value === value) {
    output = output || true;
  }
  this.children.forEach(function(child){
    output = output || child.contains(value);
  })
  
  return output;
}