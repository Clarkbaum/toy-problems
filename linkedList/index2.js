// more practice 2019

class LinkedList {
    constructor(val) {
        //TODO fix head it points to the 2nd atm
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

    //returns the value in the index
    get(index) {
        let current = this;
        let count = 0;
        while(current.next !== null) {
            if(count === index){
                return current.data;
            }
            count++;
            current = current.next;
        }
        if(count === index){
            return current.data
        }
    }

    //return the length of the list
    length() {
        let count = 1;
        let current = this;
        while (current.next !== null) {
            count++;
            current = current.next;
        }
        return count;
    }

    //insert val at specific index
    insert(val, index){
        let current = this;
        let previous = null;
        let count = 0;
        let newNode = new LinkedList(val);

        if(index === 0) {
            newNode.next = this.head;
            this.head = newNode;
            this.data = val;
            return
        }
        while(current.next !== null) {
            if(count === index) {
                previous.next = newNode;
                newNode.next = current;

            }
            count++;
            previous = current;
            current = current.next;
        }

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

console.log("get: ", linkedList.get(2));
console.log("length: ", linkedList.length());

linkedList.add("test6");
console.log("length: ", linkedList.length());

console.log("printing all values");
for(let i = 0; i < linkedList.length(); i++){
    console.log(`index: ${i} value: ${linkedList.get(i)}`)
}

linkedList.insert("test7", 0);
for(let i = 0; i < linkedList.length(); i++){
    console.log(`index: ${i} value: ${linkedList.get(i)}`)
}


junk = 1;

