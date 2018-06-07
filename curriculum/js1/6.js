/**
 * getDivisors - takes in a number and returns sum
 *   of all the divisors (except 1 or itself)
 * @param {number} a
 * @returns {number}
 */

const solution = (a, i=2, sum=0) => {
  if (a === i ) return sum;
  if (a % i === 0) sum += i;
  return solution(a, i + 1, sum);
};

module.exports = {
  solution,
};
