function isValidWalk(walk) {
  if (walk.length !== 10) return false;   // must be 10 characters for 10 min walk

  let pos = { x: 0, y: 0 };

  walk.forEach((direction) => {
    if      (direction === 'n') return pos['y']++;
    else if (direction === 's') return pos['y']--;
    else if (direction === 'e') return pos['x']++;
    else if (direction === 'w') return pos['x']--;
  });

  return (pos.x == 0 && pos.y == 0);
}

// console.log(isValidWalk(['n', 's', 'n', 's', 'n', 's', 'n', 's', 'n', 's']));
