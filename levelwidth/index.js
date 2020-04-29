// --- Directions
// Given the root node of a tree, return
// an array where each element is the width
// of the tree at each level.
// --- Example
// Given:
//     0
//   / |  \
// 1   2   3
// |       |
// 4       5
// Answer: [1, 3, 2]

function levelWidth(root) {
  const stop = 'S';
  const arr = [root, stop];
  const counter = [0];

  while(arr.length > 1) {
    const node = arr.shift();

    if (node === stop) {
      counter.push(0);
      arr.push(stop);
    } else {
      arr.push(...node.children);
      counter[counter.length - 1]++;
    }
  }

  return counter;
}

module.exports = levelWidth;
