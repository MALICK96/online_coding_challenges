/** 
    This approach uses recursion 
    and It Passes all test cases.
*/

var max = (a, b) => Math.max(a, b);
var min = (a, b) => Math.min(a, b);

var getResult = function(max, min) {
  if (max === min) return max;
  else return max + arguments.callee(max - 1, min);
};
