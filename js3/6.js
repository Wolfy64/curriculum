/*
 * write a function that takes in an array of numbers, and returns a new array of all duplicate numbers
 * @param {array} arr
 * @returns {array}
 */

const solution = (arr, i = 0, map = {}, result = []) => {
  const value = arr[i];
  if (i === arr.length) return result;
  map[value] = map[value] + 1 || 0;
  if(map[value] === 1) result.push(value);
  return solution(arr, i + 1, map, result);
};

module.exports = {
  solution
};
