'use strict';
 
var World = require('./world');
var Grid = require('./grid'),
    Vector = require('./vector'),
    elementFromChar = require('./helper/elementFromChar'),
    charFromElement = require('./helper/charFromElement'),
    View = require('./view'),
    directions = require('./directions');


function LifelikeWorld(map, legend){
  World.call(this, map, legend)
}
LifelikeWorld.prototype = Object.create(World.prototype);
LifelikeWorld.constructor = LifelikeWorld;
LifelikeWorld.prototype.letAct = function(critter, vector) {
  var action = critter.act(new View(this, vector));
  var handled = action && 
    actionTypes[action.type].call(this, critter, vector, action);  // this world
  
  if (!handled) {
    critter.energy -= 0.2;
    if (critter.energy <= 0){ this.grid.set(vector, null); }
  }
};
LifelikeWorld.prototype.toPage = function(){
  
};

// actionTypes    handler methods for the actionTypes
var actionTypes = Object.create(null);  // {} w NO prototype! thf no built ins!
actionTypes.grow = function(critter){
  critter.energy += 0.5;  return true;
};
actionTypes.move = function(critter, vector, action) { 
  var dest = this.checkDestination(action, vector);
  if (dest == null ||
    critter.energy <= 1 ||
    this.grid.get(dest) != null){
    return false;
  }
  critter.energy -= 1;
  this.grid.set(vector, null);  // this is passed in via call in letAct 
  this.grid.set(dest, critter);  // thf, this is the LL'World, instead of move() ;)
  return true;  // we moved
};
actionTypes.eat = function(critter, vector, action){
  var dest = this.checkDestination(action, vector);
  var atDest = dest != null && this.grid.get(dest);
  if (!atDest || atDest.energy == null) return false;
  critter.energy += atDest.energy;
  this.grid.set(dest, null);
  return true;
};
actionTypes.reproduce = function(critter, vector, action){
  var baby = elementFromChar(this.legend, critter.originChar);  // hypothetical baby
  var dest = this.checkDestination(action, vector);
  if (dest == null ||
    critter.energy <= 2 * baby.energy ||  // does critter posses the energy to make that h'baby?
    this.grid.get(dest) != null){ 
    return false;
  }
  critter.energy -= 2 * baby.energy;  // commit the resources!
  this.grid.set(dest, baby);  // stork has arrived!
  return true;
};



module.exports = LifelikeWorld;
