console.log('hello!');

// empty - .
// merge row - mr
// merge column - mc
const arr = [
  [1, 2, 3],
  [1, 2, 3],
  [1, 2, 3],
];

/**
 * r - index row
 * c - index column
 */
function getTemplateArea(r = 0, c = 0) {
  return `r${r}-c${c}`;
}

function getAreas(a = []) {
  if (!a.length) {
    return '';
  }

  const b = a.map((el, i) => {
    return el.map((ell, il) => {
      if (ell === 'mr') {
      }

      return getTemplateArea(i, il);
    });
  });

  const b2 = a.reduce((acc, el, i) => {}, []);

  console.log(b); // \n
  console.log(b.flatMap((x) => x.join(' '))); // \n

  return ' "1" "2" "3" ';
}

console.log(getAreas(arr));
