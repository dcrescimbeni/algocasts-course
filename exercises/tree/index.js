// --- Directions
// 1) Create a node class.  The constructor
// should accept an argument that gets assigned
// to the data property and initialize an
// empty array for storing children. The node
// class should have methods 'add' and 'remove'.
// 2) Create a tree class. The tree constructor
// should initialize a 'root' property to null.
// 3) Implement 'traverseBF' and 'traverseDF'
// on the tree class.  Each method should accept a
// function that gets called with each element in the tree

class Node {
  constructor(data) {
    this.data = data;
    this.children = [];
  }

  add(data) {
    let child = new Node(data);
    this.children.push(child);
  }

  remove(data) {
    let removeIndex;
    this.children.forEach((item, index) => {
      if (item.data === data) {
        removeIndex = index;
      }
    });

    debugger;

    if (removeIndex !== undefined) {
      this.children.splice(removeIndex, 1);
    }
  }
}

class Tree {
  constructor() {
    this.root = null;
  }

  traverseBF(fn) {
    if (!this.root) {
      return null;
    }

    let queue = [];
    queue.push(this.root);

    while (queue.length > 0) {
      let current = queue[0];

      current.children.forEach((item) => {
        queue.push(item);
      });

      fn(current);

      queue.shift();
    }
  }

  traverseDF(fn) {
    if (!this.root) {
      return null;
    }

    let stack = [];

    stack.push(this.root);

    while (stack.length > 0) {
      // Remove last element
      // and set it as current to process
      let current = stack.shift();

      // apply function to current
      fn(current);

      // Add children to stack
      if (current.children) {
        stack = [...current.children, ...stack];
      }
    }
  }
}

const letters = [];
const t = new Tree();
t.root = new Node('a');
t.root.add('b');
t.root.add('d');
t.root.children[0].add('c');

t.traverseDF((node) => {
  letters.push(node.data);
});

console.log(letters);

module.exports = { Tree, Node };
