/**
 * Print String - takes in a number n and string,
 *     return the string repeated n number of times.
 * @param {number} a
 * @param {string} b
 * @returns {string}
 */

const solution = (a, b) => {
  let result = '';
  for (let i = 0; i < a; i++ ){
    result += b;
  } 

  return result
};

module.exports = {
  solution,
};
