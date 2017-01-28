const fighters = [
  ["Ryu", "E.Honda", "Blanka", "Guile", "Balrog", "Vega"],
  ["Ken", "Chun Li", "Zangief", "Dhalsim", "Sagat", "M.Bison"]
];

//const moves = ['left', 'left', 'down', 'down', 'up', 'up', 'right', 'right', 'right']; // Vega, Balrog, Sagat, Sagat, Balrog, Balrog, Vega, Ryu, E.Honda
const startPosition = [0,0];

// clone the array properly, so as to avoid mutating the moves
function arrayClone( arr ) {
  var i, copy;

  if (Array.isArray(arr)) {
    copy = arr.slice(0);
    for (i=0; i<copy.length; i++) {
      copy[i] = arrayClone( copy[i] );
    }
    return copy;
  } else if (typeof arr === 'object') {
    throw 'Cannot clone array containing an object!';  // use: https://github.com/pvorb/clone
  } else {
    return arr;
  }
}

// select wraps horizontally, but does not wrap vertically
function streetFighterSelection(fighters, startPosition, moves) {
  let selections = [];
  let nextMove;
  let pos = startPosition;
  let movesClone = arrayClone(moves);
  while (movesClone.length) {
    nextMove = movesClone.shift();
    if (nextMove === 'right'){
      pos[1] === 5 ? pos[1] = 0 : pos[1]++;
    }
    else if (nextMove === 'left'){
      pos[1] === 0 ? pos[1] = 5 : pos[1]--;
    }
    else if (nextMove === 'up'){
      if (pos[0] === 1) pos[0]--;
    }
    else if (nextMove === 'down'){
      if (pos[0] === 0) pos[0]++;
    }
    selections.push(fighters[pos[0]][pos[1]]);
  }
  return selections;
}

let moves = ['right', 'right', 'right', 'right', 'right', 'down', 'left', 'down', 'down', 'up', 'down', 'up', 'left', 'right', 'right', 'up'];
console.log(streetFighterSelection(fighters, startPosition, moves));

/*
Expected: '[\'E.Honda\', \'Blanka\', \'Guile\', \'Balrog\', \'Vega\', \'M.Bison\', \'Sagat\', \'Sagat\', \'Sagat\', ' +
'\'Balrog\', \'Sagat\', \'Balrog\', \'Guile\', \'Balrog\', \'Vega\', \'Vega\']',  // and got it.
