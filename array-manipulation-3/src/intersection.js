/* exported intersection */
function intersection(first, second) {
  var unionizedArray = [];
  for (var i = 0; i < first.length; i++) {
    for (var j = 0; j < second.length; j++) {
      if (first[i] === second[j]) {
        unionizedArray.push(first[i]);
      }
    }
  }
  return unionizedArray;
}
