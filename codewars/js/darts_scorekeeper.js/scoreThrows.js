'use strict';

var scoreThrows = function(radiiArr){
	if (radiiArr == []) return 0;
  var score = 0;
  var bulls = 0;

  radiiArr.map(function(v,i,ar){
    if (v < 0) throw 'illegal negative dart radius';
    if ( v < 5) { score += 10; bulls++; }
    else if ( v <= 10 ) score += 5;
  });

  // 100 points bonus for all bullseyes
  if ( bulls === radiiArr.length) score += 100;

  return score;
};

// console.log(scoreThrows([1,2,3]));
// 130

