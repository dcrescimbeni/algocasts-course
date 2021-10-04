// --- Directions
// Write a function that accepts an integer N
// and returns a NxN spiral matrix.
// --- Examples
//   matrix(2)
//     [[1, 2],
//     [4, 3]]
//   matrix(3)
//     [[1, 2, 3],
//     [8, 9, 4],
//     [7, 6, 5]]
//  matrix(4)
//     [[1,   2,  3, 4],
//     [12, 13, 14, 5],
//     [11, 16, 15, 6],
//     [10,  9,  8, 7]]

function matrix(n) {
  // Create empty matrix
  let result = [];
  for (x = 0; x < n; x++) {
    let arrX = [];
    for (y = 0; y < n; y++) {
      arrX[y] = 'X';
    }
    result.push(arrX);
  }

  // Trackers initialization
  let num = 1;
  // row
  let startRowGlobal = 0;
  let endRowGlobal = n - 1;
  // column
  let startColumnGlobal = 0;
  let endColumnGlobal = n - 1;

  // bigger loop to increment num
  while (num <= n * n) {
    // current pointers initialization
    let rowCurrent;
    let columnCurrent;

    // row-normal fill
    columnCurrent = startColumnGlobal;
    while (columnCurrent <= endColumnGlobal) {
      result[startRowGlobal][columnCurrent] = num;
      columnCurrent++;
      num++;
    }
    startRowGlobal++;

    // column-normal fill
    rowCurrent = startRowGlobal;
    while (rowCurrent <= endRowGlobal) {
      result[rowCurrent][endRowGlobal] = num;
      rowCurrent++;
      num++;
    }
    endColumnGlobal--;

    // row-backwards fill
    columnCurrent = endColumnGlobal;
    while (columnCurrent >= startColumnGlobal) {
      result[endRowGlobal][columnCurrent] = num;
      columnCurrent--;
      num++;
    }
    endRowGlobal--;

    // column-backwards fill
    rowCurrent = endRowGlobal;
    while (rowCurrent >= startRowGlobal) {
      result[rowCurrent][startColumnGlobal] = num;
      rowCurrent--;
      num++;
    }
    startColumnGlobal++;

    console.log('loop');
  }

  console.log(num);
  console.log(result);
}

matrix(6);

module.exports = matrix;
