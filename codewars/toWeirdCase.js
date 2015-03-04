// 'This is a test' -> 'ThIs Is A TeSt'
'use strict';

var toWeirdCase = function(string){
  // split on spaces to get words
  return string.split(' ').map(function(word){
    // split on each letter
    return word.split('').map(function(letter, index){
      // use ? thusly  -   (even or odd) ? .toUpperCase() : .toLowerCase()
      return index % 2 === 0 ? letter.toUpperCase() : letter.toLowerCase();
    }).join('');  // join letters back
  }).join(' ');  // join words back with spaces bridging.
};  // end function

console.log(toWeirdCase('This is a test'));
// 'ThIs Is A TeSt'

// Another Test Here -> aNoThEr tEsT hErE!
var toOtherWeirdCaseBang = function(string){
  // split on spaces to get words
  return string.split(' ').map(function(word){
    // split on each letter
    return word.split('').map(function(letter, index){
      // use ?
      // we have letters, so (index === even) ? .toLowerCase() : .toUpperCase()
      return index % 2 === 0 ? letter.toLowerCase() : letter.toUpperCase();
    }).join('');  // join letters to return words
  }).join(' ') + '!';  // join words, with ' ', to return sentence string
};

console.log(toOtherWeirdCaseBang('Another Test Here'));
// aNoThEr tEsT hErE!
