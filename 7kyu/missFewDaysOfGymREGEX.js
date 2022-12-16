/*
Your task is to define a function gymSlang which accepts a string argument and does the following:

Replace all instances of "probably" to "prolly"
Replace all instances of "i am" to "i'm"
Replace all instances of "instagram" to "insta"
Replace all instances of "do not" to "don't"
Replace all instances of "going to" to "gonna"
Replace all instances of "combination" to "combo"
Your replacement regexes should be case-sensitive, only replacing the words above with slang if the detected pattern is in lowercase. However, please note that apart from 100% lowercase matches, you will also have to replace matches that are correctly capitalized (e.g. "Probably" => "Prolly" or "Instagram" => "Insta").

Finally, your code will be tested to make sure that you have used RegExp replace in your code.

Enjoy :D
*/

function gymSlang(phrase) {
  return phrase.replace(/(probably)/gi,$1=>$1[0]===$1[0].toUpperCase()?'Prolly':'prolly')
               .replace(/(i am)/gi,$1=>$1[0]===$1[0].toUpperCase()?`I'm`:`i'm`)
               .replace(/(instagram)/gi,$1=>$1[0]===$1[0].toUpperCase()?'Insta':'insta')
               .replace(/(do not)/gi,$1=>$1[0]===$1[0].toUpperCase()?`Don't`:`don't`)
               .replace(/(going to)/gi,$1=>$1[0]===$1[0].toUpperCase()?'Gonna':'gonna')
               .replace(/(combination)/gi,$1=>$1[0]===$1[0].toUpperCase()?'Combo':'combo')
}

gymSlang("Whole squad probably bigger than me now")