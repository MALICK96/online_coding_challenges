/*
    these two nested loops take care of checking if the first letter
    of each code of the book is eqaul to the category letter
    if so the get get number of books and add it to the running sum
    before store each category and the number of books it contains in
    the array we make sure that the two nested loops has gone through
    each of it indexes this will avoid unexped result on the final output.
  */
var stockList = function(code, cat) {
  var sum,
    firstLetter,
    res = [],
    str = "";
  for (var i = 0; i < cat.length; i++) {
    sum = 0;
    for (var j = 0; j < code.length; j++) {
      firstLetter = code[j].toString().charAt(0);
      if (firstLetter === cat[i]) {
        str = code[j].toString().split(" ");
        sum += +str[1];
        if (i === cat.length - 1 || j === code.length - 1) {
          res[i] = "(" + cat[i] + " : " + sum + ")";
        }
      } else {
        if (j === code.length - 1) {
          res[i] = "(" + cat[i] + " : " + sum + ")";
        } else {
          continue;
        }
      }
    }
  }
  // Finally convert the res array to string by formatting it.
  return res.join(" - ");
};

// console.log(
//   stockList(
//     ["ABAR 200", "CDXE 500", "BKWR 250", "BTSQ 890", "DRTY 600", "DIRT 60"],
//     ["A", "B", "C", "W", "z", "D"]
//   )
// );

console.log(
  stockList(
    ["ABAR 200", "CDXE 500", "BKWR 250", "BTSQ 890", "DRTY 600", "DIRT 60"],
    ["D", "B", "A", "X"]
  )
);

/**************************************** */
