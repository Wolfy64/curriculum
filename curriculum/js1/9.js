/**
 * Find next multiple of 7: returns the next number that is divisible by 7
 * @param {number} a
 * @returns {number}
 */

const solution = (a) => {
  return ( a < 7 ) ? 7 : a + 7
};

module.exports = {
  solution,
};
