/*
 * Given object of key: string values and an object of key: function values, call the functions in 2nd object, using the values in 1st object as function params
 * @param {object} obj1
 * @param {object} obj2
 * @return {object}
 **/

const solution = (obj1, obj2, i = 0, result = obj1 ) => {
  const keys = Object.keys(obj1);
  const key = keys[i];
  if(i === keys.length) return result;

  if(obj2[key]){
    result[key] = obj2[key](obj1[key])
  }

  return solution(obj1, obj2, i + 1, result)
};
module.exports = {
  solution
};
