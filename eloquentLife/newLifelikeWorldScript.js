'use strict';

var Grid = require('./grid'),
    Vector = require('./vector'),
    elementFromChar = require('./helper/elementFromChar'),
    charFromElement = require('./helper/charFromElement'),
    Plant = require('./plants/Plant'),
    PlantEater = require('./critters/PlantEater'),
    View = require('./view'),
    directions = require('./directions'),
    LifelikeWorld = require('./LifelikeWorld');

function Wall() { 
// just standing here, taking up space ;)
// I have no .act()
// TODO, move this and other one into own critter or whatever
}

var LifelikeWorld = new LifelikeWorld(
  [
  '#########################',
  '####           ***##** ##',
  '##              *#      #',
  '# ******                #',
  '# **G***  ****          #',
  '# ******  *##*          #',
  '#         *##           #',
  '#         ***           #',
  '###                     #',
  '###                     #',
  '#########################',
  ],
  {
    '#': Wall,
    'G': PlantEater,
    '*': Plant
  }
);

for (var i = 0; i < 10; i++) {
  LifelikeWorld.turn();
  console.log(LifelikeWorld.toString());
}
