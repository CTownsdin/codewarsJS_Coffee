// n = 5
//  *
// ***
//*****
// ***
//  *
function diamond(n){
  if (n % 2 === 0 || n <= 0) return null;
  let diamondRows = ['*'.repeat(n)];
  let spaces = 0;
  let lvlStr;
  while (n >= 3){
    spaces++;
    n = n - 2;
    lvlStr = ' '.repeat(spaces) + '*'.repeat(n);
    diamondRows.unshift(lvlStr);
    diamondRows.push(lvlStr);
  }
  return diamondRows.join('\n') + '\n';
}

// console.log(diamond(0));
// console.log(diamond(2));
// console.log(diamond(-3));
// console.log(diamond(5));