'use strict';

// Crawls walls, keeping a wall on it's left hand side.

var directionNames = "n ne e se s sw w nw".split(" ");

function dirPlus(dir, n) {
  var index = directionNames.indexOf(dir);
  return directionNames[(index + n + 8) % 8];
}

function WallFlower() {
  this.dir = "s";   // start looking southward
}
WallFlower.prototype.act = function(view) {
  var start = this.dir;
  // if space behind and to the left is not empty
  // then it looks like we've passed an obstacle
  // so start scanning from the left
  if (view.look(dirPlus(this.dir, -3)) != " "){
    start = this.dir = dirPlus(this.dir, -2);
  }
  while (view.look(this.dir) != " ") {
    this.dir = dirPlus(this.dir, 1);  
    if (this.dir == start) break;
  }
  return {
    type: "move",
    direction: this.dir
  };
};

module.exports = WallFlower;
