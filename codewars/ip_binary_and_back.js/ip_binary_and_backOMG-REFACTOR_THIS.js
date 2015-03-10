// OMG OMG THIS NEEDS REFACTORING!!!!!!  :)  but it's bed time  ;)  laters o/
'use strict';

var zeroFill = function(number, size) {
  number = Math.abs(~~number); // whole positive integer
  console.log('number: ' + number);

  var lenNumber = number.toString().length;
  var zerosNeeded = size - lenNumber;
  var zeros = '';
  for (var i=0; i<zerosNeeded; i++){
    zeros = zeros + '0';
  }

  return zeros + number;
};

var ipToNum = function(ip) {
  var binaryArr = ip.split('.').map(function(v,i,a){
    return Number(v).toString(2); });

  // zeroFill each chunk in the array to 8 digits, and join them
  var allTheBin = binaryArr.map(function(v,i,a){
    return zeroFill(v,8); }).join('');

  // ret:  that new single binary string converted back into decimal, not normal, ok.
  return parseInt(allTheBin, 2);
};

var numToIp = function(num) {
  // num -> allTheBin
  // 16777216 -> 1 00000000 00000000 0000000   wo spaces, this is smallest
  var allTheBin = Number(num).toString(2);

  // it's always going to be, 3 chunks of 8 bits, and the last (front) needs padding!
  // allTheBin is a big binary string
  // grab 8 bits at a time from the end
  var binArray = allTheBin.split('');
  var newArray = [];
  while (binArray.length > 8){
    newArray.unshift(binArray.splice(-8).join(''));
  }
  // now the last piece of binArry needs zero padding
  var lastStr = binArray.join('');
  var more = zeroFill(lastStr, 8)
  newArray.unshift(more);
  console.log('nA: ' + newArray);

//  nA: 00001010,00000000,00000000,00000000
// each chunk -> number
// return each number joined with '.' between them  :)
for (var k=0; k<=newArray.length-1; k++){
  newArray[k] = parseInt(newArray[k], 2);
}

  if (newArray.length === 3) { newArray.unshift('0.') }
  console.log('nA: ' + newArray.join('.'));


  return newArray.join('.');
};



// a much better answer...
// function ipToNum(ip) {
//   return ip.split('.').reduce(function (sum, x) { return sum << 8 | x }, 0) >>> 0;
// }

// function numToIp(num) {
//   return [num >>> 24, num >> 16 & 255, num >> 8 & 255, num & 255].join('.');
// }

// another one
//function pad(num,size) {
//     return num.length === size ? num : pad('0'+num,size);
// }

// function ipToNum(ip) {
//   return parseInt(ip.split('.').reduce(function(prev, c) {return prev + pad((+c).toString(2),8);} , ''), 2);
// }

// function numToIp(num) {
//   return pad(num.toString(2),32).match(/.{8}/g).map(function(c){return parseInt(c,2);}).join('.');
// }


// lastly
// function ipToNum(ip) {
//   return ip.split('.').reduce(function (sum, x) { return sum << 8 | x }, 0) >>> 0;
// }

// function numToIp(num) {
//   return [num >>> 24, num >> 16 & 255, num >> 8 & 255, num & 255].join('.');
// }
