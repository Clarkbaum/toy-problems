var Tree = function(){
  this.children = [];
};

/**
  * add an immediate child
  */
Tree.prototype.addChild = function(child){
  if(!this.isDescendant(child)){
    this.children.push(child);
  }else {
    throw new Error("That child is already a child of this tree");
  }
  return this;
};

Tree.prototype.getClosestCommonAncestor = function(tree1, tree2){
  // 1) Find path from root to n1 and store it in a vector or array.
  // 2) Find path from root to n2 and store it in another vector or array.
  // 3) Traverse both paths till the values in arrays are same. Return the common element just before the mismatch.
  // this seemed like a good idea but got stuck trying to make path to nodes
  var pathToTree1 = [];
  var searchTree1 = function(tree){
    pathToTree1.push(tree);
    if(tree === tree1) {
      console.log("pathToTree1", pathToTree1)

      return;
    }else{
      tree.children.forEach(function(item){
        searchTree1(item)
      })
    }
  }
  searchTree1(this);
  console.log("pathToTree1", pathToTree1)
  
}

Tree.prototype.getAncestorPath = function(){
  // TODO: do this!
  
}

/**
  * check to see if the provided tree is already a child of this
  * tree __or any of its sub trees__
  */
Tree.prototype.isDescendant = function(child){
  if(this.children.indexOf(child) !== -1){
    // `child` is an immediate child of this tree
    return true;
  }else{
    for(var i = 0; i < this.children.length; i++){
      if(this.children[i].isDescendant(child)){
        // `child` is descendant of this tree
        return true;
      }
    }
    return false;
  }
};

/**
  * remove an immediate child
  */
Tree.prototype.removeChild = function(child){
  var index = this.children.indexOf(child);
  if(index !== -1){
    // remove the child
    this.children.splice(index,1);
  }else{
    throw new Error("That node is not an immediate child of this tree");
  }
};