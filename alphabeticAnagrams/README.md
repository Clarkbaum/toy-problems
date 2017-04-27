# Goal

In an array of every possible anagram of a given string, what index would the original string occupy?

Consider an anagram as any sequence of letters. For any word with at least two different letters, there are other words composed of the same letters but in a different order (for instance, RESISTANCE/ANCESTRIES, which happen to both be dictionary words; for our purposes “SISTANERCE” is also a “word” composed of the same letters as these two).

Given a word, return its index number, starting at 1 (not 0), for some reason.

Here is the catch: Your function should be able to accept any word 20 letters or less in length (possibly with some letters repeated), and take no more than 5000 milliseconds to run.

Examples
Input Output
string:
"BAEBEE"  
output: 12
string:
"ABBS"  
output: 1
string:
"BABS"  
output: 4
string:
"ARCTIC"  
output: 42
string:
"STARK" 
output: 92

# status

partially finished. i got a good idea that works with out me having to find every anagram