/*
    Instruction: 

    Given  2 numbers a and b find sum all the numbers 
    between a and b and including the them too.
    if a and b are equal return a or b; 

*/

function GetSum(a, b) {
  a == b ? a : b;

  // Find the min
  var min = a < b ? a : b;
  // Find the max
  var max = a > b ? a : b;

  var sum = 0;
  // cycle from max to min and each
  // iteration add previous value of i to sum
  for (var i = max; i >= min; i--) {
    sum += i;
  }

  // return sum;
  return sum;
}

// All the Passes all the test cases.
