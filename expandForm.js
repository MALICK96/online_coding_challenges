/* Declere new array that will hold the computed values
 Convert the num into a string then split into an array of chars
  i loop counter start at last index of the num array and mult 
  variable start at 1 in each iteration the previous value of mult 
   is multiply by 10 and i is decrease by one */
function expandedForm(num) {
  var res = []; num = num.toString().split('');
  var length = num.length - 1;
  for (var i = length, k = 0, mult = 1; i >= 0; i--, k++, mult *= 10) {
    res[k] = num[i] * mult;
  }
  
  return res.filter( x => x > 0).reverse().join(' + ');
}