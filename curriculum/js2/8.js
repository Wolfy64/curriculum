/**
 * Replicate Array.prototype.map function and call it gsMap
 * @returns {[]}
 */

const solution = () => {
  Array.prototype.gsMap = function (func) {
    // To get the actual array, use this
    const arr = [];
    this.forEach(e => {
      arr.push(func(e));
    })
    return arr;
  };
};

module.exports = {
  solution,
};
