var DIGIT_VALUES = {
  I: 1,
  V: 5,
  X: 10,
  L: 50,
  C: 100,
  D: 500,
  M: 1000
};

function translateRomanNumeral (romanNumeral) {
  charArr = romanNumeral.split("")
  if(romanNumeral === '') return 0
  for (var i = 0; i < charArr.length; i++){
    var found = false;
     for (var key in DIGIT_VALUES) {
      
      if (key === charArr[i]) {
        found = true
        if (DIGIT_VALUES[charArr[i]] < DIGIT_VALUES[charArr[i + 1]]) {
          charArr[i] = '-' + DIGIT_VALUES[key]
        } else {
          charArr[i] = DIGIT_VALUES[key];
        }
      } 
    }
  }
  if(found === false){
    return 'null';
  }
  charArr = charArr.join('+')
  return eval(charArr) 
}