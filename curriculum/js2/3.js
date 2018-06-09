/**
 * Given an array, return the same array
 *   where all elements that are not prime is changed to 1
 *   Please reuse your js1 solution
 * @param {array} a
 * @returns {array}
 */
const primeFn = (a, i = 2) => {
  if (a === i ) return a;
  if (a % i === 0 || a === 1) return 1;
  return primeFn(a, i+1);
};

const solution = (a) => {
  return a.map(e => primeFn(e));
};

module.exports = {
  solution
};
