/*
    Instruction: 
            You probably know the "like" system from Facebook and other pages. People can "like" blog posts, pictures or other items. We want to create the text that should be displayed next to such an item.

            Implement a function likes :: [String] -> String, which must take in input array, containing the names of people who like an item. It must return the display text as shown in the examples:


            likes [] // must be "no one likes this"
            likes ["Peter"] // must be "Peter likes this"
            likes ["Jacob", "Alex"] // must be "Jacob and Alex like this"
            likes ["Max", "John", "Mark"] // must be "Max, John and Mark like this"
            likes ["Alex", "Jacob", "Mark", "Max"] // must be "Alex, Jacob and 2 others like this"
*/
function likes(names) {
  var str = "",
    count = 0;
  // if for the emptiness of the array
  if (names.length != 0) {
    for (var i = 0; i < names.length; i++) {
      // if length of the array is >= 4
      // then subtract 2 the array and keep it in count
      // the exit the loop
      if (names.length >= 4) {
        count = names.length - 2;
        break;
      } else if (i === 0) {
        str += names[i];
      } else if (i === names.length - 1) {
        str += " and " + names[i];
      } else {
        str += ", " + names[i];
      }
    }
  } else {
    return "no one likes this";
  }
  // if count is >= 2 then retrieve the 1st and 2nd item of the array
  // and make the sentences by append the value of count var to it
  if (count >= 2) {
    return names[0] + ", " + names[1] + " and " + count + " others like this";
  }
  //if the length of the array is 1 then use 'likes'
  //intead of like otherwise use 'like''
  return names.length === 1 ? str + " likes this" : str + " like this";
}

/*
    This Program Passes all 11 test cases
    But I before I come up with solution 
    I try defferent methods that also were
    80% corect but the last input array to
    funcion like was not correct so I uses
    this approach.


*/
