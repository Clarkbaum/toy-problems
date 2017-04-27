function topPlayers (players) {
  var output = [];
  for(var i = 0; i < players.length; i++){
    if(players[i].score > 100){
      output.push(players[i].name);
    }
  }
  
  return output;
}

//non mutative recursion
function topPlayers(players){
  var output = [];
  
  var search = function(item){
    if(item.length >= 1){
      if(item[0].score > 100){
        output.push(item[0].name);
      }
      if(item.length !== 0){
        search(item.slice(1))
      }
    }
  }
  
  search(players);
  return output
}