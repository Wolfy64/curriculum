/**
 * Greatest Common Denominator - returns greatest common denominator
 * @param {number} a
 * @param {number} b
 * @returns {number}
 */

const solution = (a, b) => {
  if (a == b) return a;
  (a > b) ? a =a-b : b=b-a;
  return solution(a,b)
};

module.exports = {
  solution,
};
