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

function generateHashtag(str) {
  // Remove spaces between words
  const newStr = str.replace(/\s/g, '')

  if (newStr.length >= 140) {
    return false;
  };

  if (newStr.length === 0) {
    return false;
  };

  const capitalizeChars = str.toLowerCase().split(' ').map((word) => word.charAt(0).toUpperCase() + word.slice(1)).join('');

  return `#${capitalizeChars}`;
};

// generateHashtag("") //false
// generateHashtag(" ") //false
// generateHashtag("Hello world") //#HelloWorld
// generateHashtag("You Were My Brother Anakin") //#YouWereMyBrotherAnakin
// generateHashtag("you were    my brother anakin") //#YouWereMyBrotherAnakin
generateHashtag("Aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa'") //false