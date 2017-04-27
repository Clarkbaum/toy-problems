# Goal

Postfix notation (also known as Reverse Polish notation) is an alternative way of representing algebra expressions. For example, take the following expression:

2 + 5 * 8
This “normal” notation that we see everyday is called infix notation. Infix notation places its math operators in-between the numbers.

Infix notation also has order of operations. The previous example will be interpreted as 2 + (5 * 8), because multiplication comes before addition. This makes it difficult to write a program to parse infix expressions.

In contrast, postfix notation is much easier to parse, albeit it looks weird at first. Postfix notation places math operators after the numbers. For example, the previous infix example can be re-written in postfix notation like this:

2 5 8 * +
This expression should be read from left to right, one number / operator at a time. In doing so, you must keep a stack of numbers that wait to be operated on.

#status

finished