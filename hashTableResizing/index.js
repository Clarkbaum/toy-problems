
var makeHashTable = function(){
  var result = {};
  var storage = [];
  var storageLimit = 4;
  var size = 0;
  var resizing = false;
//***I Need To Finish This Function***//  

  function resize(newSize){
    //http://rvbsanjose.github.io/hash-table-resizing/
    //convert storage based on newSize
    // Keep a reference to the storage to reset it
    var oldStorage = storage;
    // Update the size limit of the storage
    storageLimit = newSize;
    // Clear the storage
    storage = [];

    // Go thru each bucket in the storage
    for (var i = 0; i < oldStorage.length; i++) {
      var bucket = oldStorage[i];
      if (bucket) {
        // Reassign for each bucket
        for (var j = 0; j < bucket.length; j++) {
          var index = getIndexBelowMaxForKey(bucket[j][0], storageLimit);
          var newBucket = storage[index];
          if (newBucket) {
            newBucket.push([bucket[j][0], bucket[j][1]]);
          } else {
            newBucket = [];
            newBucket.push([bucket[j][0], bucket[j][1]]);
          }
        }
      }
    }
  }
  
//*************************//  
  
  result.insert = function(key, value){
    var index = getIndexBelowMaxForKey(key, storageLimit);
    storage[index] = storage[index] || [];
    var pairs = storage[index];
    var pair;
    var replaced = false;
    for (var i = 0; i < pairs.length; i++) {
      pair = pairs[i];
      if (pair[0] === key) {
        pair[1] = value;
        replaced = true;
      }
    }

    if (!replaced) {
      pairs.push([key, value]);
      size++;
    }
    if(size >= storageLimit * 0.75){
      // increase the size of the hash table
      resize(storageLimit * 2);
    }
  };

  result.retrieve = function(key){
    var index = getIndexBelowMaxForKey(key, storageLimit);
    var pairs = storage[index];
    if (!pairs) { return; }
    var pair;

    for (var i = 0; i < pairs.length; i++) {
      pair = pairs[i];
      if (pair && pair[0] === key) {
        return pair[1];
      }
    }
  };

  result.remove = function(key){

    var index = getIndexBelowMaxForKey(key, storageLimit);
    var pairs = storage[index];
    var pair;

    for (var i = 0; i < pairs.length; i++) {
      pair = pairs[i];
      if (pair[0] === key) {
        var value = pair[1];
        delete pairs[i];
        size--;
        if(size <= storageLimit * 0.25){
          // decrease the size of the hash table
          resize(storageLimit / 2);
        }
        return value;
      }
    }
  };
  
  //needed for testing
  result.find = function(index){
    //return the bucket at a given index
    return storage[index];
  };

  return result;
};

//hashing function
var getIndexBelowMaxForKey = function(str, max){
  var hash = 0;
  for (var i = 0; i < str.length; i++) {
    hash = (hash<<5) + hash + str.charCodeAt(i);
    hash = hash & hash; // Convert to 32bit integer
    hash = Math.abs(hash);
  }
  return hash % max;
};
