/*
    Binary additon 
    This challenge you have find the sum of 2 numbers 
    and then convert them in binary format


     The first Approach makes use of the JStoString method
     which when call on a number and passed one argument to it
     convert that in number to arguments passed to it

     The second approach also divide the sum of a and b by 2 
     and get the remainder each time. 

*/

// First Approach
let addBanary = (a, b) => (a + b).toString(2);

// Second Approach
let sumBinary = function(a, b) {
  let r = "",
    c = a + b;
  while (c >= 1) {
    r = (c % 2) + r;
    c = Math.floor(c / 2);
  }
  return r;
};
