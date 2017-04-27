# Goal

Implement the function getClosestCommonAncestor and getAncestorPath in the Tree class
```
// Valid Child
var grandma = new Tree();
var mom = new Tree();
var uncle = new Tree();
grandma.addChild(mom);
grandma.addChild(uncle);
var me = new Tree();
mom.addChild(me);

grandma.getAncestorPath(me); // => [grandma, mom, me]
mom.getAncestorPath(me)  // => [mom, me]
me.getAncestorPath(me) // => [me]
grandma.getClosestCommonAncestor(me, uncle); // => grandma

// Invalid Child
grandma.getAncestorPath(H R Giger) // => null
```
# status

partially finished