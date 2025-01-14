function linkedList() {
    let head = null;
    const append = value => {
        const node = new Node(value);
        if (!head) {
            head = node;
        } else {
            let currentNode = head;
            while (currentNode.nextNode !== null) {
                currentNode = currentNode.nextNode;
            }
            currentNode.nextNode = node;
        }
    }

    const prepend = value => {
        const node = new Node(value);
        if (!head) {
            head = node;
        } else {
            let tempNode = head;
            head = node;
            head.nextNode = tempNode;
            console.log("\nUspesno postavljen na prvoj poziciji.")
            return
        }
    }

    const size = () => {
        if (!head) {
            return 0;
        }
        let counter = 1;
        let currentNode = head;

        while (currentNode.nextNode !== null) {
            currentNode = currentNode.nextNode;
            counter++;
        }
        return counter;
    }

    const getHead = () => {
        if (!head) {
            return null
        }
        return head.value;
    }

    const tail = () => {
        if (!head) {
            return null;
        }
        let currentNode = head;

        while (currentNode.nextNode !== null) {
            currentNode = currentNode.nextNode;
        }
        return currentNode.value;
    }

    const at = index => {
        if (!head || index < 0) return null;

        let currentNode = head;
        let currentIndex = 0;

        while (currentNode !== null) {
            if (currentIndex === index) {
                return currentNode.value;
            }
            else {
                currentNode = currentNode.nextNode;
                currentIndex++;
            }
        }
    }

    const pop = () => {
        if (!head) {
            return null
        }
        let currentNode = head;

        if (currentNode.nextNode === null) {
            head = null;
            return;
        }

        while (currentNode.nextNode.nextNode !== null) {
            currentNode = currentNode.nextNode;
        }
        currentNode.nextNode = null;
        return;
    }

    const contains = value => {
        if (!head) {
            return false
        }
        let currentNode = head;

        while (currentNode != null) {
            if (currentNode.value === value) return true
            currentNode = currentNode.nextNode;
        }
        return false
    }

    const find = value => {
        if (!head) {
            return null
        }
        let currentNode = head;
        let currentIndex = 0;

        while (currentNode != null) {
            if (currentNode.value === value) return currentIndex
            currentNode = currentNode.nextNode;
            currentIndex++;
        }
        return null;
    }

    const toString = () => {
        if (!head) {
            return null
        }
        let currentNode = head;
        let string = '';

        while (currentNode != null) {
            string += `( ${currentNode.value} ) -> `
            currentNode = currentNode.nextNode;
        }
        return string += "null";
    }

    const insertAt = (value, index) => {
        let sizeList = size()
        if (!head || index < 0) return null;
        if (index > sizeList) {
            console.log("\nNevazeci index");
            return
        }
        if (index == sizeList) return append(value);

        const node = new Node(value);
        if (index === 0) {
            let tempNode = head;
            head = node;
            head.nextNode = tempNode;
            console.log("\nUspesno postavljen na prvoj poziciji.")
            return
        }

        let currentNode = head;
        let currentIndex = 0;

        while (currentNode != null) {
            if (currentIndex + 1 === index) {
                node.nextNode = currentNode.nextNode;
                currentNode.nextNode = node;
                console.log(`\nUspesno unesen cvor na index poziciji: ${index}`);
                return
            } else {
                currentNode = currentNode.nextNode;
                currentIndex++;
            }
        }
    }

    const removeAt = index => {
        let sizeList = size()
        if (!head || index < 0) return null;
        if (index >= sizeList) {
            console.log("\nNevazeci index");
            return
        }

        if (index === 0) {
            head = head.nextNode
            console.log("\nUspesno uklonjen root cvor");
            return;
        }

        let currentNode = head;
        let currentIndex = 0;

        while (currentNode !== null) {
            if (currentIndex + 1 === index) {
                //let temepNode = currentNode;                
                currentNode.nextNode = currentNode.nextNode.nextNode;
                //temepNode.nextNode.nextNode = null; 
                //temepNode.nextNode = null; Nije potrebno potpuno razvezati cvor, jer ce ga JS garbage collector ukloniti.
                console.log("\nUspesno uklonjen cvor");
                return;
            }
            else {
                currentNode = currentNode.nextNode;
                currentIndex++;
            }
        }
    }
    return {
        append, prepend, size, getHead, tail, at, pop, contains, find, toString, insertAt, removeAt,
    }
}



class Node {
    constructor(value = null, nextNode = null) {
        this.value = value
        this.nextNode = nextNode
    }
}

const list = linkedList();
for (let i=0; i<=10; i++) list.append('node')
console.log(list.toString())