/* exported findIndex */

function findIndex(array, value) {
  for (var i = 0; i < array.length; i++) {
    if (array[i] === value) {
      break;
    }
  }
  if (i === array.length) { i = -1; }
  return i;
}
