// add 'size' number of leading zeros to 'number'
'use strict';

var zeroFill = function(number, size) {
  number = Math.abs(~~number); // whole positive integer

  var lenNumber = number.toString().length;
  var zerosNeeded = size - lenNumber;
  var zeros = '';
  for (var i=0; i<zerosNeeded; i++){
    zeros = zeros + '0';
  }

  return zeros + number;
};


