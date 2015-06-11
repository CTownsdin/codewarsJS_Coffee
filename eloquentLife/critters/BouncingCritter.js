'use strict';

var directionNames = "n ne e se s sw w nw".split(" ");
var randomElement = require('../helper/randomElement');

// BOUNCING_CRITTER
function BouncingCritter() {
  this.direction = randomElement(directionNames);
}
// act rets {} w type: & dir:  
BouncingCritter.prototype.act = function(view) {
  if (view.look(this.direction) != " ") {
    this.direction = view.find(" ") || "s";
  }
  return {
    type: "move",
    direction: this.direction
  };
};

module.exports = BouncingCritter;
