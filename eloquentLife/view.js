'use strict';

var directions = require('./directions');
var charFromElement = require('./helper/charFromElement');
var randomElement = require('./helper/randomElement');

// Views have a world and a vector
function View(world, vector) {
  this.world = world;    // the world the view is in
  this.vector = vector;    // the vector of the View
}
View.prototype.look = function(dir) {   // dir = {n, s, e, w etc}
  var target = this.vector.plus(directions[dir]);  // adding two vectors... ?
  if (this.world.grid.isInside(target)){  // 
    return charFromElement(this.world.grid.get(target));
  }
  else {
    return "#";
  }
};
// return [] of dir's where can find ch
View.prototype.findAll = function(ch) {
  var found = [];
  for (var dir in directions)
    if (this.look(dir) == ch){ found.push(dir); }
  return found;
};
// return 1 random dir towards ch, if none available, return null
View.prototype.find = function(ch) {
  var found = this.findAll(ch);
  if (found.length === 0){ return null; }
  return randomElement(found);
};

module.exports = View;
