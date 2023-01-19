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
  // Look at a string
  // Each word separated by at least one space
  // Add # in front of word(s)
  
  // Remove spaces between words
  const newStr = str.replace(/\s/g, '')
  // console.log(newStr)

  // Capitalize the first letter
  // const uppercaseStr = str.toUpperCase().replace(/\b[a-zA-Z0-9]/g)
  // console.log(uppercaseStr)

  const char = str.split(' ')
  const wordArray = [];

  if (newStr.length > 140) {
    console.log(false)
    return false
  }

  if (newStr.length === 0) {
    console.log(false)
    return false
  }

  const capitalizeChars = str.toLowerCase().split(' ').map((word) => word.charAt(0).toUpperCase() + word.slice(1)).join('')

  console.log(`#${capitalizeChars}`)
  return `#${capitalizeChars}`
}

generateHashtag("") //false
generateHashtag(" ") //false
generateHashtag("Hello world") //#HelloWorld
generateHashtag("You Were My Brother Anakin") //#YouWereMyBrotherAnakin
generateHashtag("you were    my brother anakin") //#YouWereMyBrotherAnakin
generateHashtag("Looooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooong Cat") //false