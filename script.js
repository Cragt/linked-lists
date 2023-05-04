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

  at(value) {
    let index = 1;
    let current = list.head;

    while (current.value != value) {
      current = current.next;
      index++;
    }
    return index;
  }
}

let node1 = new Node(11);
let node2 = new Node(22);
node1.next = node2;

let list = new LinkedList(node1);

list.append(33);
list.prepend(123);

console.log(list);
console.log(list.size());
console.log(list.tail());
console.log(list.head.value);
console.log(list.at(11));
