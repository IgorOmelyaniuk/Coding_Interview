// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

function maxChar(str) {
  const chars = {};

  for (let char of str) {
    if (chars[char]) {
      chars[char]++;
    } else {
      chars[char] = 1;
    }
  }

  let maxKey;
  let maxChar = 0;

  for (let key in chars) {
    if (chars[key] > maxChar) {
      maxChar = chars[key];
      maxKey = key;
    }
  }

  return maxKey;
}

module.exports = maxChar;
