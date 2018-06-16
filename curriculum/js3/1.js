/**
 * biggestValue - takes in object, returns largest value
 * @param {object} obj
 * @returns {number} max
 */

const solution = obj => {
  return Math.max( ...Object.values(obj) )
};

module.exports = {
  solution
};
