/**
 * given arr of strings (keys) and an object, return an array of values.
 * @param {array} arr {object} obj
 * @returns {array} arr
 */

const solution = (arr, obj, i=0, result=[]) => {
  if(i === arr.length) return result;
  const key = arr[i];
  if(obj[key]) result.push(obj[key]);
  return solution(arr, obj, i+1, result)
}

module.exports = {
  solution
}
