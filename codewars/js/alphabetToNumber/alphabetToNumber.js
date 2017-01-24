// const dict = {
//   a: 1, b: 2, c: 3, d: 4, e: 5, f: 6, g: 7, h: 8, i: 9, j: 10, k: 11, 
//   l: 12, m: 13, n: 14, o: 15, p: 16, q: 17, r: 18, s: 19, t: 20, u: 21,
//   v: 22, w: 23, x: 24, y: 25, z: 26
// };

// function alphabetPosition(text) {
//   return text.toLowerCase().split('')
//     .filter(letter => dict[letter])  // is it in dict?
//     .map(letter => dict[letter])
//     .join(' ').trim();
// }

// fav ref solution
const alphabetPosition = (text) => text.toUpperCase().replace(/[^A-Z]/g, '').split('')
  .map(ch => ch.charCodeAt(0) - 64)  // rets code, -64 moves code, in this way, no dict is nec'y
  .join(' ');
  
