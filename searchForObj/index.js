function findPerson (name, people) {
  //go through array of people objects
  for(var i = 0; i < people.length; i++){
    if(name === people[i].name){
      return people[i].hobby;
    }
  }
  return false;
}

//non-mutative recursion not currently working atm~~~~~~~~
function findPerson(name, people){
  var search = function(item){
    if(name === item.name){
      return item.hobby
    }else if(item.length !== 0){
      search(item.slice(1))
    }
  }
  
  search(people)
  return false;
}