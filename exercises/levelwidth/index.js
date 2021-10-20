// --- Directions
// Given the root node of a tree, return
// an array where each element is the width
// of the tree at each level.
// --- Example
// Given:
//     0
//   / |  \
// 1   2   3
// |       |
// 4       5
// Answer: [1, 3, 2]

function levelWidth(root) {
  let stack = [root, 's'];
  let counter = [0];

  while (stack.length > 1) {
    let current = stack.shift();

    // process 's'
    if (current === 's') {
      counter.push(0);
      stack.push('s');
    } else {
      // increment counter
      counter[counter.length - 1]++;

      // add children
      if (current.children) {
        stack.push(...current.children);
      }
    }
  }

  return counter;
}

// const Node = require('./node');

// const root = new Node(0);
// root.add(1);
// root.add(2);
// root.add(3);
// root.children[0].add(4);
// root.children[2].add(5);

// console.log(levelWidth(root));

module.exports = levelWidth;
