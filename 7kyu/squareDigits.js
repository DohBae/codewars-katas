/* Welcome. In this kata, you are asked to square every digit of a number and concatenate them.

For example, if we run 9119 through the function, 811181 will come out, because 92 is 81 and 12 is 1.

Note: The function accepts an integer and returns an integer */

function squareDigits(num){
  const stringDigits = num.toString().split("");
  const digits = stringDigits.map(Number)
  let squared = "";

  for (let i = 0; i < digits.length; i++) {
    squared += (parseInt(digits[i])**2 + "")
  }
  
  return parseInt(squared)
}


squareDigits(3212)