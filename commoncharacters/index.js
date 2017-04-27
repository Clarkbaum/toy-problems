commonCharacters = (string1, string2) => {
  var output = '';
  for(var i = 0; i < string1.length; i++){
    if(string2.indexOf(string1[i]) !== -1 && string1[i] !== " "){ 
      //if char from string1 is in string2
      if(output.indexOf(string1[i]) === -1){
        output += string1[i];
      }
    }
  }
  return output;
};