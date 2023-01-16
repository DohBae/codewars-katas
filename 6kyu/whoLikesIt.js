/*
You probably know the "like" system from Facebook and other pages. People can "like" blog posts, pictures or other items. We want to create the text that should be displayed next to such an item.

Implement the function which takes an array containing the names of people that like an item. It must return the display text as shown in the examples:

[]                                -->  "no one likes this"
["Peter"]                         -->  "Peter likes this"
["Jacob", "Alex"]                 -->  "Jacob and Alex like this"
["Max", "John", "Mark"]           -->  "Max, John and Mark like this"
["Alex", "Jacob", "Mark", "Max"]  -->  "Alex, Jacob and 2 others like this"
*/

function likes(names) {

  if (names.length === 0) {
    return "no one likes this";
  } else if (names.length === 1) {
    return `${names} likes this`;
  } else if (names.length === 2) {
    const firstName = names.shift()
    const secondName = names.shift()
    return `${firstName} and ${secondName} like this`;
  } else if (names.length === 3) {
    const firstName = names.shift()
    const secondName = names.shift()
    const thirdName = names.shift()
    return `${firstName}, ${secondName} and ${thirdName} like this`;
  } else if (names.length >= 4) {
    const firstName = names.shift()
    const secondName = names.shift()
    const numbOfOthers = names.length
    return `${firstName}, ${secondName} and ${numbOfOthers} others like this`;
  }
};

likes([])
likes(["Peter"])
likes(["Jacob", "Alex"])
likes(["Max", "John", "Mark"])
likes(["Alex", "Jacob", "Mark", "Max"])
likes(["54fDGsdfs", "90099skldfjklajflks", "klajfdkljadlkaj f", "aijfsdjfasljf", "aijfsdjfasljf", "aijfsdjfasljf", "aijfsdjfasljf", "aijfsdjfasljf", "aijfsdjfasljf", "aijfsdjfasljf", "aijfsdjfasljf"])
