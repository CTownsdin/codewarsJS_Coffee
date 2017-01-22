// take a list of fractions, such as [1,3][1,4][1,2]]
// and return the fractions converted to the least common denominator fractions
function convertFrac(list){
  function gcf(a, b) {
    return b ? gcf(b, a % b) : Math.abs(a);
  } // greatest common factor // console.log(gcf(12, 30));  // 6

  function lcm(a, b) {
    return (a * b) / gcf(a, b);
  } // lowest common multiple // console.log(lcm(10, 25));  // 50

  function arrayLcm(nums){
    let multiple = 1;
    nums.forEach((num) => {    // 2,3,4   2,3  6,4  12
      multiple = lcm(multiple, num);
    });
    return multiple;
  } // lcm nums can be calculated sequentially // console.log(arrayLcm([3,4,5]))  // 60

  function denoms(list){
    return list.map((frac) => frac[1]);
  } // [2,3,4]  denom's  //  console.log(getDenoms(list));

  const mult = arrayLcm(denoms(list));

  // forEach pair, find mult factor, // for ex:  [1, 2]  lcm is 12,  12/2 = 6, return:  [1*6, 2*6]
  return list.map((pair) => {
    let factor = mult / pair[1];
    return [pair[0]*factor, pair[1]*factor];
  });
}

const list = [ [1,2], [1,3], [1,4] ]
console.log(convertFrac(list));  // [[6,12],[4,12],[3,12]]
