/*
Your task is simply to count the total number of lowercase letters in a string.

Examples
lowercaseCount("abc"); ===> 3

lowercaseCount("abcABC123"); ===> 3

lowercaseCount("abcABC123!@€£#$%^&*()_-+=}{[]|\':;?/>.<,~"); ===> 3

lowercaseCount(""); ===> 0;

lowercaseCount("ABC123!@€£#$%^&*()_-+=}{[]|\':;?/>.<,~"); ===> 0

lowercaseCount("abcdefghijklmnopqrstuvwxyz"); ===> 26
*/

function lowercaseCount(str){
  const lwrLetters = str.match(/[a-z]/g) || []
  
  return lwrLetters.length;
}

lowercaseCount("abc");
lowercaseCount("abcABC123!@€£#$%^&*()_-+=}{[]|\':;?/>.<,~");
lowercaseCount("ABC123!@€£#$%^&*()_-+=}{[]|\':;?/>.<,~");