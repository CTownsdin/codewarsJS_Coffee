'use strict';

// Superclass Car
var Car = function(loc){
  this.loc = loc;
};
Car.prototype.move = function(dloc){
  this.loc += dloc;
};

// Subclass Van
var Van = function(loc){
  Car.call(this, loc);  // call the Super Ctor w this
};
Van.prototype = Object.create(Car.prototype);  // Van ptype extends Car ptype
Van.prototype.constructor = Van;  // set the ctor fn
Van.prototype.logLoc = function(){ console.log('loc: ' + this.loc); };


// test it!
var villianVan = new Van(10);
villianVan.logLoc();  
// loc: 10
console.log(villianVan instanceof Van);
// true
console.log(villianVan instanceof Car);
// true
villianVan.move(3);
villianVan.logLoc();  
// loc: 13

