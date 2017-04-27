/*
 * Basic tree that stores a value.
*/
var Tree = function (value) {
  this.value = value;
  this.children = [];
};


//had a hell of a time getting the tree object to just copy without haveing access
//to things like jquery and _.clone etc. just found ths copy method online
function naiveDeepCopy( original ) {
  // First create an empty object with
  // same prototype of our original source
  var clone = Object.create(Object.getPrototypeOf(original)) ;

  var i, descriptor, keys = Object.getOwnPropertyNames(original) ;

  for ( i = 0 ; i < keys.length ; i ++ ) {
    // Save the source's descriptor
    descriptor = Object.getOwnPropertyDescriptor( original , keys[ i ] ) ;

    if ( descriptor.value && typeof descriptor.value === 'object' ) {
      // If the value is an object, recursively deepCopy() it
      descriptor.value = naiveDeepCopy( descriptor.value ) ;
    }

    Object.defineProperty( clone , keys[ i ] , descriptor ) ;
  }

  return clone ;
}

Tree.prototype.map = function (callback) {
  var mappedTree = naiveDeepCopy(this);

  var search = tree =>{
    tree.value = callback(tree.value);
    if(tree.children.length === 0){
      return
    }else{
      tree.children.forEach(child => search(child))
    }
  }
  search(mappedTree);
  
  return mappedTree
};

/**
  * add an immediate child
  * (wrap values in Tree nodes if they're not already)
  */
Tree.prototype.addChild = function (child) {
  if (! child ||  ! (child instanceof Tree)){
    child = new Tree(child);
  }

  if (! this.isDescendant(child)) {
    this.children.push(child);
  } else {
    throw new Error("That child is already a child of this tree");
  }
  // return the new child node for convenience
  return child;
};

/**
  * check to see if the provided tree is already a child of this
  * tree __or any of its sub trees__
  */
Tree.prototype.isDescendant = function (child) {
  if (this.children.indexOf(child) !== -1) {
    // `child` is an immediate child of this tree
    return true;
  } else {
    for (var i = 0; i < this.children.length; i++) {
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
Tree.prototype.removeChild = function (child) {
  var index = this.children.indexOf(child);
  if (index !== -1) {
    // remove the child
    this.children.splice(index,1);
  } else {
    throw new Error("That node is not an immediate child of this tree");
  }
};
