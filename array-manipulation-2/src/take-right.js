/* exported takeRight */
function takeRight(array, count) {
  var newArray = [];
  for (var i = array.length - count; i < array.length; i++) {
    if (count > array.length) {
      newArray = array;
    } else newArray.push(array[i]);
  }
  return newArray;
}
