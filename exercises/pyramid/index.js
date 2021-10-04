// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a pyramid shape
// with N levels using the # character.  Make sure the
// pyramid has spaces on both the left *and* right hand sides
// --- Examples
//   pyramid(1)
//       '#'
//   pyramid(2)
//       ' # '
//       '###'
//   pyramid(3)
//       '  #  '
//       ' ### '
//       '#####'

// Recursive
function pyramid(n, r = 1, s = '') {
  // Base case
  if (r > n) {
    return;
  }

  let size = n * 2 - 1;
  let start = (size - (r * 2 - 1)) / 2;
  let end = start + (r * 2 - 1);

  if (s.length === size) {
    console.log(s);
    return pyramid(n, r + 1, (s = ''));
  }

  if (s.length >= start && s.length < end) {
    s += '#';
  } else {
    s += ' ';
  }
  return pyramid(n, r, s);
}

pyramid(3);

module.exports = pyramid;

// Iterative
// function pyramid(n) {
//   // number of characters === n * 2 - 1
//   // loop through pyramid levels
//   for (let i = 1; i <= n; i++) {
//     // square size
//     let size = n * 2 - 1;

//     // loop through steps
//     // i is the level
//     // i * 2 - 1 is the number of "#" of the step
//     // the difference is white space
//     // starting point
//     let starting = (size - (i * 2 - 1)) / 2;
//     let finishing = i * 2 - 1 + starting;

//     let str = '';
//     for (let j = 1; j <= size; j++) {
//       if (j > starting && j <= finishing) {
//         str += '#';
//       } else {
//         str += ' ';
//       }
//     }
//     console.log(str);
//   }
// }
