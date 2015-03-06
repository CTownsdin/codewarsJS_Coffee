'use strict';

// onLine takes an array of 3 points
// it ret's T/F, if they are on a line.
// onLine takes the 1st and 2nd points to make a line
// and checks that the 3rd point fits the equation or not.

var onLine = function (points_3) {
  var pt_0 = points_3[0];
  var pt_1 = points_3[1];
  var pt_2 = points_3[2];

  // y = mx + b
  // m = rise / run
  var m = ( pt_1[1] - pt_0[1] ) / ( pt_1[0] - pt_0[0] );

  // b = y - mx
  var b = pt_0[1] - (m * pt_0[0]);

  // y_3 = m(x_3) + b  ?  true : false
  return ( pt_2[1] === (m * pt_2[0]) + b ) ? true : false;
};

// 3points = [[0,0],[4,3],[8,6]] -> T
var input = [[0,0],[4,3],[8,6]];
console.log(onLine(input));
// true


