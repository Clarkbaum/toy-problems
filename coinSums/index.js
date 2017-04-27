
var coins = [1,2,5,10,20,50,100,200];
function coinSums (total) {
  var count = 0;
  
  var search = function(total, coins){
    for (var i = coins.length - 1; i > 0; i--) {
      console.log("coin: ", coins[i])
      if(total - coins[i] >= 0){
        total -= coins[i];
        console.log("total", total)
        return;

      }
      if(total > 0){
        count++;
        search(total, coins.slice(0, i))
      }
      
    }
   
    
  }
  
  search(total, coins);
  
  return count;
  
}