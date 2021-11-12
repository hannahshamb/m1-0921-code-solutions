/* exported unique */
function unique(array) {
  var uniqueArray = [];
  var add;
  for (var i = 0; i < array.length; i++) {
    add = true;
    uniqueArray.push(array[i]);
    if (i > 0) {
      for (var j = 0; j < uniqueArray.length - 1; j++) {
        if ((i !== j) && (array[i] === uniqueArray[j])) {
          add = false;
        }
      }
      if (add === false) { uniqueArray.pop(); }
    }
  }
  return uniqueArray;
}
