'use strict';
var directions = require('./directions'),
  Vector = require('./vector'),
  randomElement = require('./randomElement'),
  View = require('./view'),
  World = require('./world'),
  Grid = require('./grid');

// NOT USED?
// var grid = ["top left", "top middle", "top right",
//   "bottom left", "bottom middle", "bottom right"
// ];

function Wall() {
  console.log('TODO: Inplement Wall!');
}


var directionNames = "n ne e se s sw w nw".split(" ");


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

var world = new World(plan, // plan is map of world
  {
    "#": Wall,
    "o": BouncingCritter
  } // Legend obj
);
// console.log( world.toString() );

for (var i = 0; i < 5; i++) {
  world.turn();
  console.log(world.toString());
}
// →... five turns of moving critters
