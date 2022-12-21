/*
Write a function that takes a string of parentheses, and determines if the order of the parentheses is valid. The function should return true if the string is valid, and false if it's invalid.

Examples
"()"              =>  true
")(()))"          =>  false
"("               =>  false
"(())((()())())"  =>  true

Constraints
0 <= input.length <= 100
*/

function validParentheses(parens) {
  // Loop through string.
  // Each ( needs to have an accompanying ) => (<- needs to come before ->)
  // If there is ( and ), return true, else, return false.
  return false;
}


validParentheses("()"); //True
validParentheses("(())((()())())"); //True
validParentheses(")(()))"); //False
validParentheses("(())((()())())"); //False
