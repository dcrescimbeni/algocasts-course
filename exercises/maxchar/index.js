// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

function maxChar(str) {
  let hash = {};
  for (c in str) {
    if (!hash[str[c]]) {
      hash[str[c]] = 0;
    }
    hash[str[c]]++;
  }
  console.log(hash);

  let max = {
    char: hash[str[0]],
    num,
  };

  // LO DEJE ACA, NO TERMINADO

  for (let [key, value] of Object.entries(hash)) {
  }
}

module.exports = maxChar;
