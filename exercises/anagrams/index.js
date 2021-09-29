// --- Directions
// Check to see if two provided strings are anagrams of eachother.
// One string is an anagram of another if it uses the same characters
// in the same quantity. Only consider characters, not spaces
// or punctuation.  Consider capital letters to be the same as lower case
// --- Examples
//   anagrams('rail safety', 'fairy tales') --> True
//   anagrams('RAIL! SAFETY!', 'fairy tales') --> True
//   anagrams('Hi there', 'Bye there') --> False

// /[^\w]/g

function anagrams(stringA, stringB) {
  let strA = stringA.replace(/[^\w]/g, '').toLowerCase();
  let strB = stringB.replace(/[^\w]/g, '').toLowerCase();

  let hashA = {};
  let hashB = {};

  // Generate hash maps
  for (let ch of strA) {
    if (!hashA[ch]) {
      hashA[ch] = 0;
    }
    hashA[ch]++;
  }

  for (let cb of strB) {
    if (!hashB[cb]) {
      hashB[cb] = 0;
    }
    hashB[cb]++;
  }
  console.log(hashA);
  console.log(hashB);

  if (Object.keys(hashA).length !== Object.keys(hashB).length) {
    return false;
  }

  // Compare
  for (let key in hashA) {
    if (hashA[key] !== hashB[key]) {
      return false;
    }
  }

  return true;
}

module.exports = anagrams;
