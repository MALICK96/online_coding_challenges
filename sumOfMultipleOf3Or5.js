var getSum = function(limit) {
  var sum = 0,
    n = 3,
    y = 5;
  // Start i from 1 to 1 less that limit
  // if is a multiple of n or i is a multiple y
  //then add i to the runnig sum
  for (var i = 1; i < limit; i++) {
    if (i % n === 0 || i % y === 0) sum += i;
  }
  return sum;
};
var solution = function(limit) {
  return getSum(limit);
};

// console.log(solution(10));
