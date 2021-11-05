/* exported includes */
function includes(array, value) {
  var pass = false;
  for (var i = 0; i < array.length; i++) {
    if (array[i] === value) {
      pass = true;
    }
  }
  return pass;
}
