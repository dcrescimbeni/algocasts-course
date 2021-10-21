// --- Directions
// 1) Implement the Node class to create
// a binary search tree.  The constructor
// should initialize values 'data', 'left',
// and 'right'.
// 2) Implement the 'insert' method for the
// Node class.  Insert should accept an argument
// 'data', then create an insert a new node
// at the appropriate location in the tree.
// 3) Implement the 'contains' method for the Node
// class.  Contains should accept a 'data' argument
// and return the Node in the tree with the same value.

class Node {
  constructor(data) {
    this.data = data;
    this.left = null;
    this.right = null;
  }

  insert(data) {
    // Less than (left)
    if (this.data > data) {
      // Has no children
      if (!this.left) {
        this.left = new Node(data);
        return;
      }

      // Has children
      if (this.left) {
        this.left.insert(data);
      }
    }

    // Greater than (right)
    if (this.data < data) {
      // Has no children
      if (!this.right) {
        this.right = new Node(data);
        return;
      }

      if (this.right) {
        this.right.insert(data);
      }
    }
  }

  contains(toFind) {
    // Base case, we find the value
    if (this.data === toFind) {
      return this;
    }

    // Left
    if (this.data > toFind && this.left) {
      return this.left.contains(toFind);
    }

    // Right
    if (this.data < toFind && this.right) {
      return this.right.contains(toFind);
    }

    return null;
  }
}

const node = new Node(10);
node.insert(5);
node.insert(15);
node.insert(20);
node.insert(0);
node.insert(-5);
node.insert(3);

node.contains(5);

module.exports = Node;
