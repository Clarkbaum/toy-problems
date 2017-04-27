//Queue Constructor
var Queue = function() {
  var storage = [];

  this.enqueue = function(item) {
    storage.push(item);
  };

  this.dequeue = function() {
    return storage.shift();
  };
};

var Tree = function(value){
  this.value = value;
  this.children = [];
};

//havent added the filter functionality yet. it just goes through and outputs
//breadth search array
Tree.prototype.BFSelect = function(filter) {
  var queue = new Queue();
  var output = [];

  // Push root and add children
  // < fk < [j]
  // Push current and add children
  // < kah < [jf]
  // < ahz < [jfk]
  // < hzd< [jfka]
  // < zd< [jfkah]
  //...
  
  //push root and add children
  if(filter(this.value)){
    output.push(this.value);  
  }
  
  this.children.forEach(function(item){
    queue.enqueue(item);
  });
  
  if(this.children.length === 0){
    return output;
  }
  var search = function(tree){
    if(filter(tree.value)){
      output.push(tree.value)
    }
    tree.children.forEach(function(item){
      queue.enqueue(item);
    });
    
    var pop = queue.dequeue();
    console.log("pop", pop);

    if(pop !== undefined){
      search(pop)
    }
  }
  
  search(queue.dequeue());
  return output;

};

/**
  * add an immediate child
  * (wrap values in Tree nodes if they're not already)
  */
Tree.prototype.addChild = function(child){
  if (!child || !(child instanceof Tree)){
    child = new Tree(child);
  }

  if(!this.isDescendant(child)){
    this.children.push(child);
  }else {
    throw new Error('That child is already a child of this tree');
  }
  // return the new child node for convenience
  return child;
};

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
    throw new Error('That node is not an immediate child of this tree');
  }
};
