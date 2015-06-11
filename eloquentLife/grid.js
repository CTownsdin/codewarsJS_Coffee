'use strict';

var Vector = require('./vector');

function Grid(width, height) {
  this.space = new Array(width * height);  // ex: 5*5 = 25 length
  this.width = width;  // ex:  
  this.height = height;
}
Grid.prototype.isInside = function(vector) {
  return (vector.x >= 0 && vector.x < this.width &&
          vector.y >= 0 && vector.y < this.height);
};
// takes a vector, returns the contents of that space pointed to by vector
Grid.prototype.get = function(vector) {
  return this.space[vector.x + this.width * vector.y];
};
Grid.prototype.set = function(vector, value) {
  this.space[vector.x + this.width * vector.y] = value;
};
Grid.prototype.forEach = function(fn, context) {
  for (var y = 0; y < this.height; y++){
    for (var x = 0; x < this.width; x++){
      var value = this.space[x + y * this.width];
      if (value != null){  // || undefined, using != here intentionally
        fn.call(context, value, new Vector(x, y));
      }
    }
  }
};

module.exports = Grid;
