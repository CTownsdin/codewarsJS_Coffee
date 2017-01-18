// nFloors = 3 returns:
// '  *  '
// ' *** '
// '*****'
// function towerBuilder(nFloors) {
//   if (nFloors === 1) return ['*'];
//   const strLength = 2 * nFloors - 1;
//   let towerStrings = [];
//
//   for (i=1; i<=strLength; i=i+2){
//     let spacePads = (strLength - i) / 2;
//     let levelStr = '';
//     for (j=0; j<spacePads; j++){ levelStr += ' '; }
//     for (k=0; k<i; k++){ levelStr += '*'; }
//     for (l=0; l<spacePads; l++){ levelStr += ' '; }
//     towerStrings.push(levelStr);
//   }
//   return towerStrings;
// }

// better
function towerBuilder(n) {
  return Array.from({length: n}, function(v, k) {
    const spaces = ' '.repeat(n - k - 1);
    return spaces + '*'.repeat(k + k + 1) + spaces;
  });
}

towerBuilder(2);
towerBuilder(3);
towerBuilder(4);

// [ ' * ', '***' ]
// [ '  *  ', ' *** ', '*****' ]
// [ '   *   ', '  ***  ', ' ***** ', '*******' ]
