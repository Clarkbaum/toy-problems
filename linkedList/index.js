var LinkedList = function (initialValue) {
  this.value = initialValue
  this.next = null;
  this.head = this;
  this.tail = this;
};

LinkedList.prototype.addToTail = function (value) {
  
  var node = new Node;
  node.value = value;
  node.next = null;
  
  this.tail.next = node;
  this.tail = node;
  
  if (this.head.value === undefined) this.head = node;
}

LinkedList.prototype.removeHead = function() {
  this.head = this.head.next
  if (this.head === null) this.tail = null
}

LinkedList.prototype.contains = function (search) {
  var curr = this.head
  var output = false;
  while (curr !== null) {
    if (curr.value === search) {
      output = true;
      return output;
    } else {
      curr = curr.next;
    }
  }
  
  return output;
}

var Node = function(value) {
  var node = {};

  node.value = value;
  node.next = null;

  return node;
};

///////////////////////////////
//practice

function LinkedList() {
  this.head = null;
}

LinkedList.prototype.push = function(value) {
  var node = {
    value: value,
    next: null
  };
  
  if(this.head === null) {
    this.head = node;
  } else {
    var current = this.head; 
    while(current.next){
      current = current.next
    }
    current.next = node
  }

}

LinkedList.prototype.pop = function() {
  var current = this.head;
  while(current.next.next) {
    current = current.next;
  }
  var popped = current.next.value;
  current.next = null;
  
  return popped;
  
}


var linkedList = new LinkedList();
linkedList.push(1);
linkedList.push(2);
console.log(linkedList.pop())
console.log(linkedList.head)


