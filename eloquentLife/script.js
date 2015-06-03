'use strict';

var plan = [
  "############################",
  "#      #        ##    o    #",
  "#                          #",
  "#                          #",
  "#         #######          #",
  "#              #           #",
  "#             ##           #",
  "#            ###           #",
  "#                          #",
  "#                          #",
  "#              o           #",
  "#     ###                  #",
  "#     ###        o         #",
  "#                         ##",
  "############################"
];

function Vector(x, y) {
  this.x = x;
  this.y = y;
}
Vector.prototype.plus = function(other) {
  return new Vector(this.x + other.x, this.y + other.y);
};

var grid = ["top left", "top middle", "top right", 
            "bottom left", "bottom middle", "bottom right"];




