'use strict';

var calculateHypotenuse = function(a,b) {
  if ( isNaN(a) || isNaN(b) || a<= 0 || b<= 0 || typeof(a) !== 'number' || typeof(a) !== 'number'){
    throw 'A and B must be numbers, not strings, and not NaN either';
  }

  else {
    return (Math.round( Math.sqrt( (a*a) + (b*b) ) * 1000 ) / 1000 ).toFixed(3);
  }
};

// console.log(calculateHypotenuse(1,1));
// 1.414
// console.log(calculateHypotenuse('1',1));
// throw
// console.log(calculateHypotenuse(1,NaN));
// throw
