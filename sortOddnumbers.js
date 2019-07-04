/*
  This function takes an array and declare the 2 main variable
  highest to keep track of all previous highest odd numbers 
  at each itearion of the inner loop if is there any.
  And index to keep track of the index where that highest will be 
  store in the arr array..
  
  And temp to keep track of all lowers odd numbers
  
  This script took: around 2 milleseconds to compute
*/

function sortArray(arr) {
  var len, highest, temp, index;
  len = arr.length;
  highest = 0;

  for (var i = 0; i < len; i++) {
    highest = 0;
    for (var j = 0; j < len; j++) {
      if (arr[j] % 2 !== 0) {
        if (arr[j] > highest) {
          highest = arr[j];
          index = j;
        } else {
          temp = arr[j];
          arr[j] = highest;
          arr[index] = temp;
          index = j;
        }
      }
    }
  }
  return arr;
}
