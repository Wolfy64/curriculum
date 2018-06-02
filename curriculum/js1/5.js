/**
 * Call X - takes in a number X and a function,
 *    Call the function X number of times
 * @param {number} a
 * @param {function} b
 */

const solution = (a, b, i = 0) => {
  if (!a || a == i) return;
  b();
  i++;
  return solution(a, b, i);
};

module.exports = {
  solution,
};
