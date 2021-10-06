// --- Directions
// Implement a Queue datastructure using two stacks.
// *Do not* create an array inside of the 'Queue' class.
// Queue should implement the methods 'add', 'remove', and 'peek'.
// For a reminder on what each method does, look back
// at the Queue exercise.
// --- Examples
//     const q = new Queue();
//     q.add(1);
//     q.add(2);
//     q.peek();  // returns 1
//     q.remove(); // returns 1
//     q.remove(); // returns 2

const Stack = require('./stack');

class Queue {
  constructor() {
    this.stackOne = new Stack();
    this.stackTwo = new Stack();
  }

  add(record) {
    this.stackOne.push(record);
  }

  remove() {
    // Pass all the records from stackOne to stackTwo
    while (this.stackOne.peek()) {
      this.stackTwo.push(this.stackOne.pop());
    }

    // Remove the top record of stackTwo
    let removed = this.stackTwo.pop();

    // Return all the records from stackTwo to stackOne
    while (this.stackTwo.peek()) {
      this.stackOne.push(this.stackTwo.pop());
    }

    return removed;
  }

  peek() {
    // Pass all the records from stackOne to stackTwo
    while (this.stackOne.peek()) {
      this.stackTwo.push(this.stackOne.pop());
    }

    // Peek first record of stackTwo
    let peekValue = this.stackTwo.peek();

    // Return all the recods from stackTwo to stackOne
    while (this.stackTwo.peek()) {
      this.stackOne.push(this.stackTwo.pop());
    }

    return peekValue;
  }
}

let q = new Queue();

q.add(1);
q.add(2);
q.add(3);

console.log(q.remove());

module.exports = Queue;
