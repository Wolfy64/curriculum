/**
 * 2 Timeouts: takes in 2 numbers (a,b) and a function,
 *     execute the function after a seconds,
 *     and then execute the function again after b seconds
 * @param {number} a
 * @param {number} b
 * @param {function} c
 */

const solution = (a, b, c = () => console.log('toto')) => {
  // a *= 1000
  // b *= 1000
  setTimeout(c, a)
  setTimeout(c, a+b)
};

module.exports = {
  solution,
};

