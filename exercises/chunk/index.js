// --- Directions
// Given an array and chunk size, divide the array into many subarrays
// where each subarray is of length size
// --- Examples
// chunk([1, 2, 3, 4], 2) --> [[ 1, 2], [3, 4]]
// chunk([1, 2, 3, 4, 5], 2) --> [[ 1, 2], [3, 4], [5]]
// chunk([1, 2, 3, 4, 5, 6, 7, 8], 3) --> [[ 1, 2, 3], [4, 5, 6], [7, 8]]
// chunk([1, 2, 3, 4, 5], 4) --> [[ 1, 2, 3, 4], [5]]
// chunk([1, 2, 3, 4, 5], 10) --> [[ 1, 2, 3, 4, 5]]

function chunk(array, size) {
  let arrParent = [];
  let arrChild = [];
  let count = 0;

  for (let i = 0; i < array.length; i++) {
    arrChild.push(array[i]);
    count++;
    // console.log(arrChild);
    if (count === size) {
      arrParent.push(arrChild);
      arrChild = [];
      count = 0;
    }
  }
  if (arrChild.length !== 0) {
    arrParent.push(arrChild);
  }
  console.log(arrParent);
  return arrParent;
}

chunk([1, 2, 3, 4, 5, 6], 2);
chunk([1, 2, 3, 4, 5, 6], 2);
chunk([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 3);
chunk([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 20);

module.exports = chunk;
