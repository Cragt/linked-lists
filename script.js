class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
  constructor(head = null) {
    this.head = head;
  }

  size() {
    let count = 0;
    let node = this.head;
    while (node) {
      count++;
      node = node.next;
    }
    return count;
  }

  append(value) {
    const newNode = new Node(value);

    if (!this.head) {
      this.head = newNode;
      return;
    }

    let current = this.head;
    while (current.next) {
      current = current.next;
    }
    current.next = newNode;
  }

  prepend(value) {
    const newNode = new Node(value);

    if (!this.head) {
      this.head = newNode;
      return;
    }
    let current = this.head;
    this.head = newNode;
    newNode.next = current;
  }

  head() {
    return this.head;
  }

  tail() {
    let current = this.head;
    while (current.next) {
      current = current.next;
    }
    return current;
  }

  at(index) {
    let nodePosition = 1;
    let current = this.head;

    while (index != nodePosition) {
      current = current.next;
      nodePosition++;
    }
    return current;
  }

  pop() {
    let current = this.head;
    while (current.next.next) {
      current = current.next;
    }
    current.next = null;
  }

  contains(value) {
    let current = this.head;
    while (current && current.value !== value) {
      current = current.next;
    }
    if (!current) {
      return false;
    }
    if (current.value == value) {
      return true;
    }
  }

  find(value) {
    let index = 1;
    let current = this.head;

    while (current && current.value !== value) {
      current = current.next;
      index++;
    }

    if (!current) {
      return `"${value}" not found`;
    }
    return index;
  }

  toString() {
    let current = this.head;
    let string = "";
    while (current.next) {
      string += `(${current.value}) -> `;
      current = current.next;
    }
    string += `(${current.value}) -> (null)`;
    return string;
  }

  insertAt(value, index) {
    let current = this.head;
    const newNode = new Node(value);
    let nodePosition = 0;

    if (index === 0) {
      newNode.next = this.head;
      this.head = newNode;
      return;
    }
    while (current) {
      if (nodePosition === index - 1) {
        newNode.next = current.next;
        current.next = newNode;
        return;
      }
      current = current.next;
      nodePosition++;
    }

    throw new Error("Index out of bounds");
  }

  removeAt(index) {
    let current = this.head;
    let nodePosition = 0;

    if (index === 0) {
      current.value = null;
      this.head = current.next;
      return;
    }
    while (current) {
      if (nodePosition === index - 1) {
        current.next.value = null;
        current.next = current.next.next;
        return;
      }
      current = current.next;
      nodePosition++;
    }
  }
}

let node1 = new Node(11);
let node2 = new Node(22);
node1.next = node2;

let list = new LinkedList(node1);

list.append(33);
list.prepend(123);

console.log(list);
// console.log("append:");
// console.log("prepend:");
// console.log("size:", list.size());
// console.log("head:", list.head);
// console.log("tail:", list.tail());
// console.log("at:", list.at(4));
// console.log("pop:");
// console.log("contains", list.contains(11));
// console.log("find:", list.find(123));
list.insertAt(55, 4);
// list.removeAt(4);
console.log(list.toString());
