// --- Directions
// Given an integer, return an integer that is the reverse
// ordering of numbers.
// --- Examples
//   reverseInt(15) === 51
//   reverseInt(981) === 189
//   reverseInt(500) === 5
//   reverseInt(-15) === -51
//   reverseInt(-90) === -9

function reverseInt(n) {
    let s = n.toString();
    let res = '';
    let sign = 1;
    for (c in s) {
      debugger;
      if (s[c] === '-') {
        sign = -1;
      } else {
        res = s[c] + res;
      }
    }
    return parseInt(res, 10) * sign;

}

module.exports = reverseInt;
