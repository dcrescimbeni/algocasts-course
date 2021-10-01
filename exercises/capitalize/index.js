// --- Directions
// Write a function that accepts a string.  The function should
// capitalize the first letter of each word in the string then
// return the capitalized string.
// --- Examples
//   capitalize('a short sentence') --> 'A Short Sentence'
//   capitalize('a lazy fox') --> 'A Lazy Fox'
//   capitalize('look, it is working!') --> 'Look, It Is Working!'

function capitalize(str) {
  let arr = str.split(' ');
  let capitalizedArr = arr.map((elem) => {
    let first = elem.substring(0, 1);
    first = first.toUpperCase();
    let rest = elem.substring(1, elem.length);
    return first + rest;
  });
  return capitalizedArr.join(' ');
}

console.log(capitalize('hello, world'));

module.exports = capitalize;
