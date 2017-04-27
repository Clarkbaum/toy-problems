var Stack = function() {
  var storage = [];

  this.push = function(value){
    storage.push(value);
  };

  this.pop = function(){
    return storage.pop()
  };

  this.size = function(){
    return storage.length
  };
};

var Queue = function() {

  var inbox = new Stack();
  var outbox = new Stack();

  this.enqueue = function(value){
    inbox.push(value);
  };

  this.dequeue = function(){

    var output = outbox.pop();
    if (output) {
      return output;
    } else {
      var inboxSize = inbox.size();
      for(var i = 0; i < inboxSize; i++){
        outbox.push(inbox.pop());
      }
      
      return outbox.pop();
    }
  };

  this.size = function(){
    return inbox.size() + outbox.size();
  };
  
};
