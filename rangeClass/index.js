var Range = function(start, end, step) {
  this.start = start;
  this.end = end || 0;
  this.step = step || 1;
  if(this.start > this.end && this.step === 1) this.step = -1
};

Range.prototype.size = function () {
  var count = 0;
  
  if(this.end === 0){
    return this.start;
  } else {
    for (var i = this.start; i <= this.end; i += this.step){
      count++;
    }
  }
  
  return count++
};

Range.prototype.each = function (callback) {
  var swapped = false;
  if(this.step < 0){
    var junk = this.start;
    this.start = this.end;
    this.end = junk;
    swapped = true;
  }
  
  if(this.start > this.end || swapped){
    for (var i = this.end; i >= this.start; i += this.step){
      callback(i);
    }
  } else { 
    for (var i = this.start; i <= this.end; i += this.step){
      callback(i);
    }
  }
  
  if(this.step < 0){
    var junk = this.start;
    this.start = this.end;
    this.end = junk;
  }
};

Range.prototype.includes = function (val) {
  var output = false;
 
  if(this.end === 0){
    return this.start === val ? true : false
  }
  if(this.start > this.end){
    for (var i = this.end; i <= this.start; i += this.step){
      if(i === val) output = true
    }
  }
  for (var i = this.start; i <= this.end; i += this.step){
    if(i === val) output = true
  }
  
  return output;
};