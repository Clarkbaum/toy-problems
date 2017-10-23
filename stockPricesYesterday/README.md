# Goal

suppose we could access yesterdays stock prices as an array, where:
- the indices are the time in minutes past trade opening time, which was 9:30am local time.
- the values are the prices in dollars of Apple stock at the time.

so if the stock cost $500 at 10:30am, stockPricesYesterday[60] = 500.

Write an efficient function that takes stockPricesYesterday and returns the best profit i could have made from 1 purchase and 1 sale of 1 Apple stock yesterday.

example:

var stockPricesYesterday = [10, 7, 5, 8, 11, 9];

getMaxProfit(stockPricesYesterday);
//returns 6 (buying for $5 then selling for $11)

no shorting - you must buy before you sell.  you may not buy and sell in the same time step (at least 1 min must pass)

# status

in progress