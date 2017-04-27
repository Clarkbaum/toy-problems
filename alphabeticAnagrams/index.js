
function factorial (n) {
  var f = [];
  if (n == 0 || n == 1)
    return 1;
  if (f[n] > 0)
    return f[n];
  return f[n] = factorial(n-1) * n;
}

function anagramPosition (string) {
  var amount = factorial(string.length)
  console.log("amount", amount)
}

console.log('STARK')

anagramPosition('BABS')

/*
(range > x && range <= y) (not including the min number but is including max number)

ABCDEFGHIJKLMNOPQRSTUVWXYZ
STARK //AKRST
120 possible solutions
120 / 5 = 24 Range
4/5 letter so range is 72 - 96

TARK //AKRT
24 possible solutions
24 / 4 = 6 range
4/4 letter so range is 18 - 24
96 - 24 = offset is 72
add offset to range to include earlier range
18 + 72 - 24 + 72
so range is 90 - 96

ARK // AKR
6 possible solutions
6 / 3 = 2 range
1/3 letter so range is 0 - 2
90 - 0 = offset is 90
add offset to range to include earlier range
0 + 90 - 2 + 90
so range is 90 - 92

RK //KR
2 possible solutions
2 / 2 = 1 range
2/2 letter so range is last choice

so answer is 92
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
ABCDEFGHIJKLMNOPQRSTUVWXYZ
ARCTIC //ACCIRT
360 possible solutions
360 / 6 = 60 range
1/6 letter so range is 0 - 60

RCTIC //CCIRT
60 posible solutions
60 / 5 = 12 range
4/5 letter so range is 36 - 48
no offset
so range is 35 - 48

CTIC //CCIT
12 possible solutions
12 / 4 = 3 range
1/4 letter so range is 0 - 3
35 - 0 = 35 offset
35 - 38 ~~dam this is wrong

TIC //CIT
6 possible solutions
6 / 3 = 2 range
3/3 letter so range is 4 - 6

IC //CI
2 possible solutions
2 / 2 = 1 range
last letter so range is 2






*/