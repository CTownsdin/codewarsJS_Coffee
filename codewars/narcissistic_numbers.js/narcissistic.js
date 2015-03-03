'use strict';

var narcissistic = function(num) {
  var numStr = String(num)
  var ln = numStr.length
  var sum = 0;

  // get each digit, and raise it to the pow(length)
  for (var i=0; i<=ln-1; i++) {
    sum += Math.pow((num.toString().charAt(i)), ln)
  }

  return (sum === num);
}

module.exports = narcissistic;

// example:  153 -> 1^3 + 5^3 + 3^3 = 153, return TRUE;   that's narcissistic num.
// 11 -> 1^2 + 1^2 = 2, return FALSE;  that's not narcissistic num.
