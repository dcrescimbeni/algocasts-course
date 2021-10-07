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
}

module.exports = { Node, LinkedList };
