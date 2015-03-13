'use strict';

// function sumDigits(number) {
//   var number = Math.abs(number);
//   var mySArr = number.toString().split('');
//   var myNArr = mySArr.map(function(v,i,ar){ return +v; });
//   return myNArr.reduce(function(Vp,Vc){ return Vp + Vc; });
// }

var sumDigits = function(number) {
  return Math.abs(number).toString().split('').reduce(function(Vp,Vc){ return +Vp + +Vc; });
};

// var someNumber = 424242;
// console.log(sumDigits(someNumber));
// 18



