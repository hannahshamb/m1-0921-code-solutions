/* exported zip */
function zip(first, second) {
  var zippedArray = [];
  var subArray = [];
  var length;
  if (first.length === second.length) {
    length = first.length;
  } else if (first.length < second.length) {
    length = first.length;
  } else if (second.length < first.length) {
    length = second.length;
  }
  for (var i = 0; i < length; i++) {
    for (var j = 0; j < length; j++) {
      if (i === j) {
        subArray.push(first[j]);
        subArray.push(second[j]);
      }
    }
    zippedArray.push(subArray);
    subArray = [];
  }
  return zippedArray;
}
