/*
Return the number (count) of vowels in the given string.

We will consider a, e, i, o, u as vowels for this Kata (but not y).

The input string will only consist of lower case letters and/or spaces.

*/

function getCount(str) {
  // have counter set to 0 to keep track of number of vowels
  let count = 0;
  
  // loop through string
  for (let i = 0; i < str.length; i++) {
    // if the letter in the string === a, e, i, o, or u, add 1 to the count
    if(str[i] === "a" || str[i] === "e" || str[i] === "i" || str[i] === "o" || str[i] === "u") {
      count += 1;
    }
  }
  
  // return the count
  return count;
}

getCount("hello i");