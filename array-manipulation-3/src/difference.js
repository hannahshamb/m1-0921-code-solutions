/* exported difference */
function difference(first, second) {
  var differenceArray = first.concat(second);

  for (var i = 0; i < differenceArray.length; i++) {
    var duplicateIndex;
    for (var j = 0; j < differenceArray.length; j++) {
      if ((i !== j) && (differenceArray[i] === differenceArray[j])) {
        differenceArray.splice(j, 1);
        duplicateIndex = differenceArray.indexOf(differenceArray[i]);
        differenceArray.splice(duplicateIndex, 1);
      }
    }
  }
  return differenceArray;
}
