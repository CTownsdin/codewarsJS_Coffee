'use strict';

var playerXSpeed = 7;
function Player(pos){
  this.pos = pos.plus(new Vector(0, -0.5));
  this.size = new Vector(0.8, 1.5);
  this.speed = new Vector(0, 0);
}
Player.prototype.type = "player";
Player.prototype.moveX = function(step, level, keys) {
  this.speed.x = 0;
  
  if (keys.left) { this.speed.x -= playerXSpeed; }
  if (keys.right) { this.speed.x += playerXSpeed; }
  
  var motion = new Vector(this.speed.x * step, 0);
  var newPos = this.pos.plus(motion);
  var obstacle = level.obstacleAt(newPos, this.size);
  if (obstacle) { level.playerTouched(obstacle); }
  else { this.pos = newPos; }
};


// module.exports = Player;
