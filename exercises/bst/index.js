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
    function insert(data, current) {
      // Less than (left)
      if (current.data > data) {
        if (!current.left) {
          current.left = new Node(data);
          return;
        }

        if (current.left) {
          current = current.left;
          insert(data, current);
        }
      }

      // Greater than (right)
      if (current.data < data) {
        if (!current.right) {
          current.right = new Node(data);
          return;
        }

        if (current.right) {
          current = current.right;
          insert(data, current);
        }
      }
    }

    insert(data, this);
  }

  contains(toFind) {
    function search(toFind, current) {
      // Base case, we find the value
      if (current.data === toFind) {
        return current;
      }

      // Left
      if (current.data > toFind) {
        // The node has no children
        // So it doesn't exist
        if (!current.left) {
          return null;
        }

        if (current.left) {
          current = current.left;
          return search(toFind, current);
        }
      }

      // Right
      if (current.data < toFind) {
        // The node has no children
        // So it doesn't exist
        if (!current.right) {
          return null;
        }

        if (current.right) {
          current = current.right;
          return search(toFind, current);
        }
      }
    }

    // console.log(search(toFind, this));

    return search(toFind, this);
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
