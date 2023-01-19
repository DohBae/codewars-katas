/*
DESCRIPTION:
The marketing team is spending way too much time typing in hashtags.
Let's help them with our own Hashtag Generator!

Here's the deal:

It must start with a hashtag (#).
All words must have their first letter capitalized.
If the final result is longer than 140 chars it must return false.
If the input or the result is an empty string it must return false.
Examples
" Hello there thanks for trying my Kata"  =>  "#HelloThereThanksForTryingMyKata"
"    Hello     World   "                  =>  "#HelloWorld"
""                                        =>  false
*/

function generateHashtag (str) {
  // If a string is longer than 140 characters, return false
  // If a string is blank, return false
  // Look at a string
  // Each word separated by at least one space
  // Capitalize the first letter
  // Remove spaces between words
  // Add # in front of word(s)
}

generateHashtag("") //false
generateHashtag("Hello world") //#HelloWorld
generateHashtag("You Were My Brother Anakin") //#YouWereMyBrotherAnakin