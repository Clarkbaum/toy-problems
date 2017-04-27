# Goal

Implement the countLeaves function in this Tree class.

A leaf node is any node in the tree that has no children. countLeaves should
traverse the tree, and return the number of leaf nodes the tree contains.

Example usage:
```

var root = new Tree();

root.countLeaves(); // 1

root.addChild(new Tree());

root.countLeaves(); // still 1

root.addChild(new Tree());

root.children[0].addChild(new Tree());

root.children[0].addChild(new Tree());

root.children[0].children[0].addChild(new Tree());

root.countLeaves(); // 3
```

# status

finished