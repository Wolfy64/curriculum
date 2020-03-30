/*
 * write a map function for objects
 * @param {callback} cb
 * @returns {number}
 *
 * const info = {
 *   ironman: 'arrogant',
 *   spiderman: 'naive',
 *   hulk: 'strong',
 * }
 *
 * const result = info.map( (key, value, i) => {
 *   return key + i + value
 * })
 * console.log(result)
 *
 * will print out ['ironman0arrogant', 'spiderman1naive', 'hulk2strong']
 */

const solution = () => {
  Object.prototype.map = function(cb, i=0, result=[]) {
    if(i === Object.keys(this).length) return result;
    const [key, value] = Object.entries(this)[i];
    result.push(cb(key, value, i))
    return this.map(cb, i+1, result);
  };
};

module.exports = {
  solution
};
