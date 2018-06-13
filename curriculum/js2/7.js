/**
 *  Takes in an array and a number,
 *    return the number of elements that matches the number
 * @param {array} a
 * @param {number} b
 * @returns {array}
 */

const solution = (a, b) => {
  return a.filter(number => b === number).length;
};

module.exports = {
  solution,
};
