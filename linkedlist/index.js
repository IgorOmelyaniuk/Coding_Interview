// --- Directions
// Implement classes Node and Linked Lists
// See 'directions' document

class Node {
  constructor(data, next = null) {
    this.data = data;
    this.next = next;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
  }

  insertFirst(data) {
    this.head = new Node(data, this.head);
  }

  size() {
    let counter = 0
    let node = this.head;
    
    while (node) {
      counter++;
      node = node.next;
    }

    return counter;
  }

  getFirst() {
    return this.head;
  }

  getLast() {
    let last = this.head;

    if (!last) {
      return null;
    }

    while(last) {
      if (!last.next) {
        return last;
      }
      last = last.next;
    }
  }

  clear() {
    this.head = null;
  }

  removeFirst() {
    if (!this.head) {
      return;
    }

    this.head = this.head.next;
  }

  removeLast() {
    let previous = this.head;
    
    if (!previous) {
      return;
    }

    let node = this.head.next;

    if (!node) {
      this.head = null;;
      return;
    }

    while(node.next) {
      previous = node;
      node = node.next;
    }

    previous.next = null;
  }

  insertLast(data) {
    const node = new Node(data);
    
    if (!this.head) {
      this.head = node;
      return;
    }

    this.getLast().next = new Node(data);
  }

  getAt(index) {
    let node = this.head;
    let counter = 0;

    while(node) {
      if (counter === index) {
        return node;
      }

      node = node.next;
      counter++;
    }

    return null;
  }

  removeAt(index) {
    if (!this.head) {
      return;
    }

    if (index === 0) {
      this.head = this.head.next;
    }

    const previous = this.getAt(index - 1);
    
    if (previous && previous.next) {
      previous.next = previous.next.next;
    }
  }

  insertAt(data, index) {
    if (!this.head) {
      this.head = new Node(data);;
      return;
    }

    if (index === 0) {
      this.head = new Node(data, this.head);
       return;
    }

    const previous = this.getAt(index - 1) || this.getLast();
    previous.next = new Node(data, previous.next);
  }

  forEach(fn) {
    let node = this.head;
    let counter = 0;

    while(node) {
      fn(node, counter);
      node = node.next;
      counter++;
    }
  }

  *[Symbol.iterator]() {
    let node = this.head;

    while(node) {
      yield node;
      node = node.next;
    }
  }
}

module.exports = { Node, LinkedList };
