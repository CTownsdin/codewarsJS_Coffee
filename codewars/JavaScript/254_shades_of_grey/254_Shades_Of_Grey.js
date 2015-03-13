'use strict';

// returns    #010101 - #fefefe   as values in an array
var shadesOfGrey = function(n){
  var arr = [];
  if (n<0) return arr;

  if (n>=254) { n = 254; }

  for(var i=1; i<=n; i++){
    var hex = i.toString(16);
    if (hex.length === 1){ hex = '0' + hex; }
    arr.push('#' + hex + hex + hex);
  }
  return arr;
};
