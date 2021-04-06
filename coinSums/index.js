
// var coins = [1,2,5,10,20,50,100,200];
// function coinSums (total) {
//   var count = 0;
  
//   var search = function(total, coins){
//     for (var i = coins.length - 1; i > 0; i--) {
//       console.log("coin: ", coins[i])
//       if(total - coins[i] >= 0){
//         total -= coins[i];
//         console.log("total", total)
//         return;

//       }
//       if(total > 0){
//         count++;
//         search(total, coins.slice(0, i))
//       }
      
//     }
   
    
//   }
  
//   search(total, coins);
  
//   return count;
  
// }


// 2021 attempt
let coins = [1,2,5,10,20,50,100,200];

let coinSums = (total) => {
  for(coin of coins) {
    console.log(coin, total / coin)
  }
}

coinSums(5);

//I really dont like this algorithm idea 

//loop thru the coins and when i see a full int I have at least some ansers
//I then take the remaining above 1 and subtract the coin value
  //add 1 * coin value to answer
  //recursive with that value
    //keep recursing until total - coin is 2 or 1
//if i find a 2 or a 1 I end the results with 
  //1 * 2p
  //2 * 1p
  //or
  //1 * 1p




