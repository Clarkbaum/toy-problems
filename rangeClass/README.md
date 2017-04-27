# Goal

Build a class to represent a range of numbers that has:

a beginning index
an end index (optional). If there is no end index, the range should include only the passed-in start value.
a ‘step’ (optional)
it should not store the range as an array of numbers; it should work in constant space.
The step is the interval at which elements are included. For instance, a step of 1 includes every element in the range, while a step of 2 includes every other element.

You should allow a negative value for ‘step’ to count backwards. If no step is provided and the start is more than the end, assume we’re counting backwards.

The range should have a constructor that accepts these arguments in this order:

beginning index
end index
step interval
It should also support the following utility functions:

size(): return the number of items represented by the range
each(callback(index)): iterate over the range, passing each value to a callback function
includes(index): return whether or not the range includes the passed value
You should also be aware of the following caveats:

Should return null if we are given no ‘start’ value.
Again, Range should use constant space, even during the each() method, * i.e. you should not use an array as backing storage.

#status

finished