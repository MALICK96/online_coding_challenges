/* 
    Complete the function that accepts a string parameter, and reverses each word in the string. All spaces in the string should be retained.
*/
var reverseWords = function(str) {
  str = str.split(" ");
  for (var i in str) {
    str[i] = str[i]
      .split("")
      .reverse()
      .join("");
  }
  return str.join(" ");
};
