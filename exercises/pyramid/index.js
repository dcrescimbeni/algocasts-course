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

function pyramid(n) {
  // number of characters === n * 2 - 1
  // loop through pyramid levels
  for (let i = 1; i <= n; i++) {
    // square size
    let size = n * 2 - 1;

    // loop through steps
    // i is the level
    // i * 2 - 1 is the number of "#" of the step
    // the difference is white space
    // starting point
    let starting = (size - (i * 2 - 1)) / 2;
    let finishing = i * 2 - 1 + starting;

    let str = '';
    for (let j = 1; j <= size; j++) {
      if (j > starting && j <= finishing) {
        str += '#';
      } else {
        str += ' ';
      }
    }
    console.log(str);
  }
}

pyramid(10);

module.exports = pyramid;
