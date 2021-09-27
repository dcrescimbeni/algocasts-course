// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

function reverse(str) {
  let s = '';
  for (char of str) {
    s = char + s;
  }
  return s;
}

// Alternative
// function reverse(str) {
//   return str.split('').reverse().join('')
// }

module.exports = reverse;
