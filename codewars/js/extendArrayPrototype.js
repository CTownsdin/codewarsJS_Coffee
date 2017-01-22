// extend the array prototype
Array.prototype.square  = function(){ return this.map(n => n * n)};
Array.prototype.cube    = function(){ return this.map(n => n * n * n)};
Array.prototype.sum     = function(){ return this.reduce((prev, curr) => prev + curr, 0)};
Array.prototype.even    = function(){ return this.filter(n => n % 2 === 0 )};
Array.prototype.odd     = function(){ return this.filter(n => n % 2 === 1 )};
Array.prototype.average = function(){ return this.sum(this) / this.length;};
