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
//   pyramid(4)
//      '   #   '
//      '  ###  '
//      ' ##### '
//      '#######'


// function pyramid(n) {
//   const width = 2 * n - 1;
//   const middle = Math.floor(width / 2);
//   for (let row = 0; row < n; row++) {
//     let str = '';

//     for (let column = 0; column < width; column++) {
//       if (column <= middle + row && column >= middle - row) {
//         str += '#';
//       } else {
//         str += ' ';
//       }
//     }

//     console.log(str);
//   }
// }

function pyramid(n, row = 0, str = '') {
  if (row === n) {
    return;
  }

  const width = 2 * n - 1;

  if (str.length === width) {
    console.log(str);
    return pyramid(n, row + 1)
  }

  const middle = Math.floor(width / 2);
  let temporary;

  if (str.length <= middle + row && str.length >= middle - row) {
    temporary = '#';
  } else {
    temporary = ' ';
  }

  pyramid(n, row, str + temporary);

}

module.exports = pyramid;
