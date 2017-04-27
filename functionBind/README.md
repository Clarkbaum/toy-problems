# Goal

PImplement the function ‘bind’, which accepts a function and a context as arguments. The context argument should override an existing context that the function is defined in. Your bind function should return the passed in function.

For example, if we have the following object:
```
var alice = {
  name: 'alice',
  shout: function () {
    alert('here comes' + ' ' + this.name);
  }
};


alice.shout() //=> 'here comes alice'
```
If you use your bind function with the context { name: 'bob' }, as is shown here:
```
boundShout = bind(alice.shout, { name: 'bob' })
```
Then calling boundShout() will alert 'here comes bob'

# status

finished