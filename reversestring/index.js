// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

// Solution #1
function reverse(str) {
  return str.split('').reverse().join('');
}

// Solution #2
// function reverse(str) {
//   let reversedStr = '';

//   for (let character of str) {
//     reversedStr = character + reversedStr;
//   }

//   return reversedStr;
// }

// Solution #3
// function reverse(str) {
//   return str.split('').reduce((acc, current) => current + acc, '');
// }

module.exports = reverse;
