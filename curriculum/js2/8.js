/**
 * Replicate Array.prototype.map function and call it gsMap
 * @returns {[]}
 */

const solution = () => {
  Array.prototype.gsMap = function (func, i=0, arr=[] ) {
    // To get the actual array, use this
    if (this.length === i) return arr;
    arr.push(func(this[i]));
  
    return this.gsMap(func, i+1, arr);
  };
};

module.exports = {
  solution,
};