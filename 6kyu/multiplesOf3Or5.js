/*
If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. The sum of these multiples is 23.

Finish the solution so that it returns the sum of all the multiples of 3 or 5 below the number passed in. Additionally, if the number is negative, return 0 (for languages that do have them).

Note: If the number is a multiple of both 3 and 5, only count it once.


*/

function solution(number){
  let numSum = 0;
  // List numbers below number.
  for (let i = 0; i < number; i++ ) {
    // Are numbers divisible by 3, 5, or 3 and 5?
    if (i % 3 === 0 || i % 5 === 0) {
      numSum += i; // Add numbers that are divisible together.
    } else if (i < 0) {
        return 0; // If number < 0, return 0;
    }
  }
  return numSum;
}

solution(10)