// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a step shape
// with N levels using the # character.  Make sure the
// step has spaces on the right hand side!
// --- Examples
//   steps(2)
//       '# '
//       '##'
//   steps(3)
//       '#  '
//       '## '
//       '###'
//   steps(4)
//       '#   '
//       '##  '
//       '### '
//       '####'

// Recursive solution
function steps(n, r = 1, s = '') {
  if (r > n) {
    return;
  }

  // New line
  if (s.length === n) {
    console.log(s);
    return steps(n, r + 1, (s = ''));
  }

  // Process steps
  if (s.length < r) {
    s += '#';
  } else {
    s += '-';
  }

  debugger;

  steps(n, r, s);
}

steps(4);

// Iterative solution
// function steps(n) {
//   let step = 1;
//   while (step <= n) {
//     let result = '';
//     result = '#'.repeat(step);
//     result += ' '.repeat(n - step);
//     console.log(result);
//     step++;
//   }
// }

module.exports = steps;
