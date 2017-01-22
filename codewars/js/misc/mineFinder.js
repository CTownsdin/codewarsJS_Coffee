// given inputs of N x N grids, all zeros, except 1 'mine' === 1
// find that mine and report it back, as if [x, y], [row, col]
'use strict';

var mineFinder = function(mineField){
  // r = row, c = column, of the n x n grid.
  for (var r=0, c; r<mineField.length; r++){
    c = mineField[r].indexOf(1);
    if (c != -1) return [r, c];
  }
};

module.exports = mineFinder;
