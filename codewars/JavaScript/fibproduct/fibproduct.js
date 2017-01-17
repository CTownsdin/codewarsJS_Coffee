// given a target number
// determine if two consecutive fibonacci numbers can be multipled
// to equal that product, returns a boolean
function productFib(target){
  let f1 = 0;
  let f2 = 1;
  let temp;

  while (true){
    if ((f1 * f2) == target) break;
    if ((f1 * f2) > target) break;
    temp = f1;
    f1 = f2;
    f2 = temp + f2;
  }

  // if ((f1 * f2) === target) return [f1, f2, true];
  // return [f1, f2, false];
  return [f1, f2, f1*f2===target];
}
