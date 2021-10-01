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

function steps(n) {
  let step = 1;
  while (step <= n) {
    let result = '';
    result = '#'.repeat(step);
    result += ' '.repeat(n - step);
    console.log(result);
    step++;
  }
}

steps(4);

module.exports = steps;
