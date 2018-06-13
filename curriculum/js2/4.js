/**
 * Given an array, return the sum of all values
 * @param {array} a
 * @returns {number}
 */
const add = (sum, n) => sum + n;
const solution = (a) => {
  if (a.length < 1) return '';
  return a.reduce(add);
};

module.exports = {
  solution,
};
