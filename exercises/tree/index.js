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
    let testVar;
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
}

// const t = new Tree();
// t.root = new Node('a');
// t.root.add('b');
// t.root.add('c');
// t.root.children[0].add('d');
// debugger;

module.exports = { Tree, Node };
