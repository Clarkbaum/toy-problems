function onlyUnique (str) {
  var strCount = {};
  for (var i = 0; i < str.length; i++) {
    if (strCount[str[i]]){
      strCount[str[i]]++;
    } else {
      strCount[str[i]] = 1;
    }
  }
  var output = '';
  for( var key in strCount){
    if(strCount[key] === 1){
      output += key;
    }
  }
  
  return output;
}