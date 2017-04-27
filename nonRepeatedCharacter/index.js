function firstNonRepeatedCharacter (string) {
  let valuePair = {};
  for(var i = 0; i < string.length; i++){
    valuePair.hasOwnProperty(string[i]) ? valuePair[string[i]][0]++ : valuePair[string[i]] = [1, i]
  }
  
  let sortable = [];
  for(var key in valuePair){
    sortable.push([key, valuePair[key]])
  }

  sortable.sort((a, b) => a[1][0]- b[1][0]);
  let newSortable = []
  sortable.forEach(item => {
    if(item[1][0] === 1){
      newSortable.push(item);
    }
  })
  newSortable.sort((a, b) => a[1][1] - b[1][1])
  
  return newSortable.length === 0 ? 'sorry' : newSortable[0][0]
}