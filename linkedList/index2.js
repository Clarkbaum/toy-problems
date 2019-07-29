// more practice 2019

class LinkedList {
    constructor(val) {
        this.head = null;
        this.next = null;
        this.data = val;
    }

    //add value to end of list
    add(val) {
        const newNode = new LinkedList(val);
        if ( this.head === null){
            this.head = newNode;
            this.next = newNode;
        } else {
            let current = this;
            while(current.next !== null) {
                current = current.next;
            }
            current.next = newNode;
        }
    }

    //removes last val and returns it
    pop() {
        let current = this;
        let previous = null;
        while(current.next !== null) {
            previous = current;
            current = current.next;
        }
        previous.next = null;

        return current;
    }

    //removes val listed or returns -1 if not found
    remove(val){
        let current = this;
        let previous = null;
        while(current.next !== null) {
            if(current.data === val){
                previous.next = current.next;
                return val;
            }
            previous = current;
            current = current.next;
        }
        if(current.data !== val){
            return -1;
        }
    }

    //boolean  returns true or false based on if value exists or not
    contains(val) {
        let output = false;
        let current = this;
        while(current.next !== null) {
            if(current.data === val){
                output = true;
            }
            current = current.next;
        }
        if (current.data === val) {
            output = true;
        }

        return output;
    }
}

linkedList = new LinkedList(10);
linkedList.add("test");
linkedList.add("test2");
linkedList.add("test3");
linkedList.add("test4");
linkedList.add("test5");

console.log(linkedList.pop());
linkedList.remove("test3");
console.log(linkedList.contains(10));
console.log(linkedList.contains("test"));
console.log(linkedList.contains("test3"));
console.log(linkedList.contains("test4"));
console.log(linkedList.contains("test5"));

junk = 1;

