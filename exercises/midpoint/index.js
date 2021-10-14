// --- Directions
// Return the 'middle' node of a linked list.
// If the list has an even number of elements, return
// the node at the end of the first half of the list.
// *Do not* use a counter variable, *do not* retrieve
// the size of the list, and only iterate
// through the list one time.
// --- Example
//   const l = new LinkedList();
//   l.insertLast('a')
//   l.insertLast('b')
//   l.insertLast('c')
//   midpoint(l); // returns { data: 'b' }

function midpoint(list) {
  let slow = list.head;
  let fast = list.head;

  let next1 = fast.next;
  let next2 = next1.next;

  while (next1 !== null && next2 !== null) {
    slow = slow.next;
    fast = fast.next;
    fast = fast.next;

    next1 = fast.next;
    next2 = next1.next;
  }

  return slow.data;

  // Not finished, not working
}

module.exports = midpoint;
