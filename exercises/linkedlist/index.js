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
  constructor(head = null) {
    this.head = head;
  }

  insertFirst(data) {
    let oldHead = this.head;
    this.head = new Node(data, oldHead);
  }

  size() {
    let count = 0;
    if (this.head) {
      count++;
      let currentNode = this.head;
      while (currentNode.next) {
        currentNode = currentNode.next;
        count++;
      }
    }

    return count;
  }

  getFirst() {
    return this.head;
  }

  getLast() {
    let current = this.head;
    while (current.next) {
      current = current.next;
    }
    return current;
  }

  clear() {
    this.head = null;
  }

  removeFirst() {
    this.head = this.head.next;
  }

  removeLast() {
    if (this.size() === 1) {
      this.head = null;
      return;
    }

    if (this.size() === 0) {
      return;
    }
    let current = this.head;
    let prev = this.head;
    while (current.next) {
      prev = current;
      current = current.next;
    }
    prev.next = null;
    return prev;
  }
}

module.exports = { Node, LinkedList };
