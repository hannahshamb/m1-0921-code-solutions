/* exported union */
function union(first, second) {
  var unionArray = first.concat(second);

  for (var i = 0; i < unionArray.length; i++) {
    for (var j = 0; j < unionArray.length; j++) {
      if ((i !== j) && (unionArray[i] === unionArray[j])) {
        unionArray.splice(j, 1);
      }
    }
  }
  return unionArray;
}
