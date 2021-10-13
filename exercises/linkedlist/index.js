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

  insertLast(data) {
    if (!this.head) {
      this.head = new Node(data);
      return;
    }
    let current = this.head;

    while (current.next) {
      current = current.next;
    }

    let newNode = new Node(data);
    current.next = newNode;
  }

  getAt(index) {
    if (this.size() < index) {
      return null;
    }
    let i = 0;
    let current = this.head;

    while (i < index) {
      current = current.next;
      i++;
    }

    return current;
  }

  removeAt(index) {
    let toDelete = this.getAt(index);

    if (!toDelete) {
      return null;
    }

    // Removes first entry (head)
    if (index === 0) {
      this.head = this.head.next;
    }

    // Removes last entry (tail)
    if (toDelete.next === null) {
      let previous = this.getAt(index - 1);
      previous.next = null;
    }

    // Removes node in the middle
    let previous = this.getAt(index - 1);
    previous.next = this.getAt(index + 1);
  }

  insertAt(data, index) {
    // Inserts at head
    if (this.size() === 0) {
      this.head = new Node(data);
    }

    // Inserts at the beginning
    if (index === 0) {
      let prevHead = this.head;
      this.head = new Node(data);
      this.head.next = prevHead;
    }

    // LEFT AT THE MIDDLE
    // NOT FINISHED
  }
}

module.exports = { Node, LinkedList };
