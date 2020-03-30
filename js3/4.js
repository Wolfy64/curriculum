/*
 * 2sum: write a function that takes in an array of numbers and a number, and returns true if any pairs add up to the number. (No duplicates)
 * @param {array} arr
 * @param {number} num
 * @returns {boolean}
 */

// solution([1,2,22,333,23], 25)   // returns true
// solution([1,2,22,333,23], 24)   // returns true
const solution = (arr, num) => {
  if(num === 0 && arr.length === 0) return false;
  for(let i = 0; i < arr.length; i++){
    for(let j = i+1; j < arr.length; j++){
      if ( arr[i] + arr[j] === num) {
        return true;
      }
    }
  }

  return false
}

module.exports = {
  solution
}
