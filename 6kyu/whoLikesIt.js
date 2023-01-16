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
  // Look through array.
  // If it's empty, return "no one likes this".
  // If there's 1 string, return "string like this".
  // If there's 2 strings, return "string1 and string2 like this".
  // If there's 3 strings, return "string1, string2 and string 3 like this".
  // If there's 4 strings, return "string1, string2 and numberOfStringsLeft like this"

  
}

likes([])
likes(["Peter"])
likes(["Jacob", "Alex"])
likes(["Max", "John", "Mark"])
likes(["Alex", "Jacob", "Mark", "Max"])
