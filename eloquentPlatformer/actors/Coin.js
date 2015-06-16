'use strict';

var wobbleSpeed = 8, wobbleDist = 0.07;
function Coin(pos) {
  this.basePos = this.pos = pos.plus(new Vector(0.2, 0.1)); 
  this.size = new Vector(0.6, 0.6);
  this.wobble = Math.random() * Math.PI * 2;  // things unique to ea instance
}
Coin.prototype.type = "coin";  // things common to all, all coin are type coin
Coin.prototype.act = function(step) {
  this.wobble += step * wobbleSpeed;
  var wobblePos = Math.sin(this.wobble) * wobbleDist;
  this.pos = this.basePos.plus(new Vector(0, wobblePos));
};


// module.exports = Coin;
