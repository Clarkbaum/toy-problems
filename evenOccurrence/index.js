function evenOccurrence (arr) {
  var occurrence = {};
  context = this;
  arr.forEach(function(item){
    if(occurrence.hasOwnProperty("keyS"+item) || occurrence.hasOwnProperty("keyN"+item)){
      if(typeof item === 'number'){
        occurrence["keyN"+item]++;

      }else{
        occurrence["keyS"+item]++;
      }
      //item is inside occurrence 
    }else{
      //item is NOT inside occurrence
      if(typeof item === 'number'){
        occurrence["keyN"+item] = 1;

      }else{
        occurrence["keyS"+item] = 1;
      }
    }
  })
  console.log("occurrence: ", occurrence)
  //now i need to take occurrence and take the first key that has a even value
  for (var key in occurrence){
    if (occurrence[key] % 2 === 0){
      if(key[3] === 'S'){
        //string
        return key.slice(4);
      }else{
        //number
        return Number(key.slice(4));
      }
    }
  }
  return null
}

//attempt to make it pretty
evenOccurrence =  (arr) => {
  let occurrence = {};
  arr.forEach((item) => {
    if(occurrence.hasOwnProperty("keyS"+item) || occurrence.hasOwnProperty("keyN"+item)){
      typeof item === 'number' ? occurrence["keyN"+item]++ : occurrence["keyS"+item]++
    }else{
      typeof item === 'number' ? occurrence["keyN"+item] = 1 : occurrence["keyS"+item] = 1
    }
  })
  for (let key in occurrence){
    if (occurrence[key] % 2 === 0){
      return key[3] === 'S' ? key.slice(4) : Number(key.slice(4))
    }
  }
  return null
}