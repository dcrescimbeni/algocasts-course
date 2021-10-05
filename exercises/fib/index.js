// --- Directions
// Print out the n-th entry in the fibonacci series.
// The fibonacci series is an ordering of numbers where
// each number is the sum of the preceeding two.
// For example, the sequence
//  [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]
// forms the first ten entries of the fibonacci series.
// Example:
//   fib(4) === 3

// memoization solution
function fib(n, h = {}) {
  if (n === 0) {
    return (h[0] = 0);
  }

  if (n === 1) {
    return (h[1] = 1);
  }

  if (h[n] === undefined) {
    h[n] = fib(n - 1, h) + fib(n - 2, h);
  }

  return h[n];
}

module.exports = fib;

// Recursive solution
// function fib(n) {
//   if (n === 1 || n === 0) {
//     return n;
//   }

//   return fib(n - 1) + fib(n - 2);
// }
