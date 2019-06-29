var calcSum = function(n) {
  var r = 0,
    s = 0;
  // If n is less than 10 we stop and return the value of n
  if (n < 10) {
    return n;
  } else {
    r = n % 10; // get the last digit
    s = r + arguments.callee(Math.floor(n / 10)); // call the function expression recursion here
  }
  return s;
};

var digital_root = function(n) {
  var sum = calcSum(n);
  // This loop make sure that only one single
  // value should be returned from the calcSum
  // which will be the sum of it's digits
  while (sum >= 10) {
    sum = calcSum(sum);
  }
  return sum;
};
