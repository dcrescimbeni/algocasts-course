// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

function reverse(str) {
  let s = '';
  for (let i = 0; i < str.length; i++) {
    s += str[str.length - 1 - i].toString();
  }
  return s;
}

module.exports = reverse;
