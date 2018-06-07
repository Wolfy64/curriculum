/**
 * isPrime - returns if number is prime
 *    Prime: numbers can only be divided by 1 and itself
 * @param {number} a
 * @returns {boolean}
 */

const solution = (a, i = 2) => {
  if (a === i ) return true;
  if (a % i === 0 || a === 1) return false;
  return solution(a, i+1);
};

module.exports = {
  solution,
};
