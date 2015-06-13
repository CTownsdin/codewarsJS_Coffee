'use strict';
var directions = require('./directions'),
  Vector = require('./vector'),
  randomElement = require('./helper/randomElement'),
  View = require('./view'),
  World = require('./world'),
  Grid = require('./grid'),
  BouncingCritter = require('./critters/BouncingCritter'),
  WallFlower = require('./critters/WallFlower');

// NOT USED?
// var grid = ["top left", "top middle", "top right",
//   "bottom left", "bottom middle", "bottom right"
// ];

function Wall() { 
// just standing here, taking up space ;)
// I have no .act()
}


var directionNames = "n ne e se s sw w nw".split(" ");


// var plan = [
//   "############################",
//   "#      #        ##         #",
//   "#                      o   #",
//   "#         #######          #",
//   "#              #         % #",
//   "#           o ##           #",
//   "#            ###          ##",
//   "#                    #######",
//   "#                          #",
//   "#                          #",
//   "#     ###      o  #     o  #",
//   "#  %  ###         #        #",
//   "#               ####    ####",
//   "############################"
// ];

var plan = [
  "#####################",
  "#     o     #########",
  "#             #######",
  "#               #####",
  "#          o      ###",
  "#  %#         % o  ##",
  "#  ##               #",
  "#####################"
];

var world = new World(plan, // plan is map of world
  {
    "#": Wall,
    "o": BouncingCritter,
    "%": WallFlower
  } // Legend obj
);

for (var i = 0; i < 100; i++) {
  world.turn();
  console.log(world.toString());
}

