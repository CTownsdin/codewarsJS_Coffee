function arrayClone( arr ) {
  var i, copy;

  if (Array.isArray(arr)) {
    copy = arr.slice(0);
    for (i=0; i<copy.length; i++) {
      copy[i] = arrayClone( copy[i] );
    }
    return copy;
  } else if (typeof arr === 'object') {
    throw 'Cannot clone array containing an object!';  // use: https://github.com/pvorb/clone
  } else {
    return arr;
  }
}
