function persistence(num) {
  let count = 0;

  function recur(input){
    if (input <= 9) return count;

    count = count + 1;

    var next = String(input).split('').reduce((prev, curr) => {
      return Number(prev) * Number(curr);
    }, 1);

    return recur(next);
  }

  return recur(num);
};
console.log(persistence(5555));


function whilePersistent(num){
  let count = 0;
  let next = num;

  while(next > 9){
    count++;

    next = String(next).split('').reduce((prev, curr) => {
      return Number(prev) * Number(curr);
    }, 1);
  }

  return count;
}
console.log(whilePersistent(555));
