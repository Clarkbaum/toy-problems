// more practice 2024
// doubly linked list this time
// Each node contains two pointers, a pointer to the next node and a pointer to the previous node.

class myLinkedList2 {
    private head: myNode2 | null;

    constructor() {
        this.head = null
    }

    // length of linked list
    size(): Number {
        let count = 1;
        if (this.head === null) {
            return 0;
        } else {
            let current = this.head;
            while (current.getNext() != null) {
                count++;
                current = current.getNext();
            }
            return count;
        }
    }

    // remove all values from linked list
    clear() {
        this.head = null;
    }

    // return last node in linkedList
    getLast(): myNode2 | null {
        if (this.head === null) {
            return null
        }
        let current = this.head;
        while (current.getNext() != null) {
            current = current.getNext();
        }
        return current;
    }

    // return first node in linkedlist
    getFirst(): myNode2 | null {
        return this.head;
    }

    // adds myNode to the end of the linkedlist
    add(val: string) {
        if (this.head === null) {
            let newNode = new myNode2(val)
            this.head = newNode;
        } else {
            let current = this.head;
            let prev = new myNode2('null');
            while (current.getNext() != null) {
                prev = current;
                current = current.getNext()
            }
            let newNode = new myNode2(val)
            current.setPrev(prev)
            current.setNext(newNode);
        }
    }

    //remove the last node in the linkedlist and return it
    pop(): myNode2 | null {
        if (this.head === null) {
            return null
        } else {
            let current = this.head;
            while (current.getNext().getNext() != null) {
                current = current.getNext();
            }
            let output = current.getNext()
            current.setNext(null)
            return output;
        }
    }

    // remove specific value from linkedlist
    remove(val) {
        if (this.head === null) {
            return;
        } else {
            let current = this.head;
            while (current.getNext().getData() !== val) {
                current = current.getNext();
            }
            let continuedNode = current.getNext().getNext()
            current.setNext(continuedNode)
        }
    }

    // returns true or false if the value exists in the linkedlist
    contains(val): boolean {
        if (this.head === null) {
            return false;
        } else {
            let current = this.head;

            while (current.getNext() != null) {
                if (current.getData() === val) {
                    return true
                } else {
                    current = current.getNext();
                }
            }

            return current.getData() === val ? true : false
        }
    }

    // return the node that matches the value given. return null if not found
    get(val): myNode2 | null {
        let output;
        if (this.head === null) {
            return null;
        } else {
            let current = this.head;

            while (current.getNext() != null) {
                if (current.getData() === val) {
                    output = current
                    break;
                } else {
                    current = current.getNext();
                }
            }

            if (current.getData() === val) {
                output = current;
            }
            return output;
        }
    }
    // insert val after the given val
    insert(insertVal, afterVal) {
        if (this.head === null) {
            return;
        } else {
            let current = this.head;
            while (current.getNext() != null) {
                if (current.getData() === afterVal) {
                    let newNode = new myNode2(insertVal)
                    let nextNode = current.getNext()
                    newNode.setNext(nextNode)
                    current.setNext(newNode)
                }
                current = current.getNext()
            }

            if (current.getData() === afterVal) {
                let newNode = new myNode2(insertVal)
                let nextNode = current.getNext()
                newNode.setNext(nextNode)
                current.setNext(newNode)
            }
        }
    }

    getHead() {
        return this.head
    }
}

class myNode2 {
    private next;
    private prev;
    private data: string;

    constructor(val) {
        this.next = null;
        this.data = val;
    }

    getData() {
        return this.data;
    }

    setData(val) {
        this.data = val;
    }

    getNext() {
        return this.next;
    }

    setNext(val: myNode2 | null) {
        this.next = val;
    }

    getPrev() {
        return this.prev;
    }

    setPrev(val) {
        this.prev = val
    }

}

let linkedList = new myLinkedList2();
linkedList.add("test1")
linkedList.add("test2")
linkedList.add("test3")
linkedList.add("test4")
//linkedList.clear();
// console.log(linkedList.getLast())
console.log(linkedList.size())
linkedList.getLast();

if (linkedList.getHead != null) {
    let current = linkedList.getHead()
    while (current?.getNext() != null) {
        console.log(current.getData())
        current = current.getNext()
    }
    console.log(current?.getData())
}

console.log(linkedList.remove("test3"))

console.log(linkedList.size())

if (linkedList.getHead() != null) {
    let current = linkedList.getHead()
    while (current?.getNext() != null) {
        console.log(current.getData())
        current = current.getNext()
    }
    console.log(current?.getData())

}

// console.log(linkedList.contains("test4"))
// console.log(linkedList.contains("test3"))

console.log(linkedList.get("test2"))

linkedList.insert("inserted", "test1")

if (linkedList.getHead() != null) {
    let current = linkedList.getHead()
    while (current?.getNext() != null) {
        console.log(current.getData())
        current = current.getNext()
    }
    console.log(current?.getData())

}
