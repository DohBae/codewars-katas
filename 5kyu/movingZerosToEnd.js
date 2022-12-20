/*
Write an algorithm that takes an array and moves all of the zeros to the end, preserving the order of the other elements.

EXAMPLE:
moveZeros([false,1,0,1,2,0,1,3,"a"]) // returns[false,1,1,2,1,3,"a",0,0]
*/

function moveZeros(arr) {
  let zeros = [];
  return arr
    .filter((el) => {
      if (el === 0) {
        zeros.push(0);
        return false;
      }
      return true;
    })
    .concat(zeros);
}

moveZeros([false,1,0,1,2,0,1,3,"a"])