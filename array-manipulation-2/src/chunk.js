/* exported chunk */
function chunk(array, size) {
  if (size > array.length) {
    size = length.array;
  }
  var newArrays = [];
  var subArray = [];
  for (var i = 0; i < array.length; i++) {
    subArray.push(array[i]);
    if (subArray.length === size) {
      newArrays.push(subArray);
      subArray = [];
    }
  }
  if (subArray.length > 0) {
    newArrays.push(subArray);
  }
  return newArrays;
}
