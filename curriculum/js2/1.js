/**
 * Given an array, return the same array where
 *   all elements <= 5 is changed to 0
 * @param {array} a
 * @returns {array}
 */

const solution = (a) => {
  return a.map( e => ( e <= 5 ) ? e = 0 : e)
};

module.exports = {
  solution,
};
