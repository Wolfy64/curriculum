/*
 * Write a function that takes in an object and a number (millieseconds).
 * - You must call each function value of the object {"nVal": (k) => {...}}
 * - {"nVal": (k) => {...When this function runs, k is "nVal"...}}
 * @param {object} obj
 * @param {number} num (millieseconds)
 * @call each function value of the object, millieseconds after each other
 */

// const solution = (obj, num, i=0) => {
//   const keys = Object.keys(obj);
//   const key = keys[i];
//   if(i === keys.length) return;
//   if(i === 0){
//     obj[key](key)
//     return solution(obj, num, i + 1);
//   }
//   setTimeout(() => {
//     obj[key](key)
//     return solution(obj, num, i + 1);
//   }, num)
// }
const solution = (obj, num, i = 0, isWaiting = false) => {
  const keys = Object.keys(obj);
  const key = keys[i];
  if (i === keys.length) return;
  // if(!isWaiting){
  //   obj[key](key);
  //   isWaiting = true;
  //   setTimeout(() => {
  //     isWaiting = false;
  //     return solution(obj, num, i + 1, isWaiting);
  //   }, num);
  // }

  if(!isWaiting){
    obj[key](key);
    isWaiting = true;
  }



  setTimeout(() => {
    isWaiting = false;
    return solution(obj, num, i + 1, isWaiting);
  }, num);
};

module.exports = {
  solution
};
