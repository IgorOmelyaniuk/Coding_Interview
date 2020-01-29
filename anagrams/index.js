// --- Directions
// Check to see if two provided strings are anagrams of eachother.
// One string is an anagram of another if it uses the same characters
// in the same quantity. Only consider characters, not spaces
// or punctuation.  Consider capital letters to be the same as lower case
// --- Examples
//   anagrams('rail safety', 'fairy tales') --> True
//   anagrams('RAIL! SAFETY!', 'fairy tales') --> True
//   anagrams('Hi there', 'Bye there') --> False


// function buildMap(str) {
//   const charMap = {};

//   for (let char of str.replace(/[\W]/g, '').toLowerCase()) {
//     charMap[char] = charMap[char] + 1 || 1;
//   }

//   return charMap;
// }

// function anagrams(stringA, stringB) {
//   const charMapA = buildMap(stringA);
//   const charMapB = buildMap(stringB);
  
//   if (Object.keys(charMapA).length !== Object.keys(charMapB).length) {
//     return false;
//   }

//   for (let key in charMapA) {
//     if (charMapA[key] !== charMapB[key]) {
//       return false;
//     }
//   }

//   return true;
// }

function cleanStr(str) {
  return str.replace(/[\W]/g, '')
    .toLowerCase()
    .split('')
    .sort()
    .join('');
}

function anagrams(stringA, stringB) {
  return cleanStr(stringA) === cleanStr(stringB);
}

module.exports = anagrams;
