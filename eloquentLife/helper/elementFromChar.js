'use strict';
 
function elementFromChar(legend, ch) {
  if (ch == " ") return null;
  // create instance 
  var element = new legend[ch](); // lookup characters ctor
  // and apply new to it
  element.originChar = ch; // add prop to el
  return element; // return element
}

module.exports = elementFromChar;
