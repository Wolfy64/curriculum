/**
 * Given an array, return a new array of numbers larger than 5
 * @param {array} a
 * @returns {array}
 */

const solution = (a) => {
  if (a.lenght === 0) return '';
  return a.filter(number => number > 5);
};

module.exports = {
  solution,
};
