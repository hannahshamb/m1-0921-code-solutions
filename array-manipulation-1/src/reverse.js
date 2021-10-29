/* exported reverse */
function reverse(array) {
  var newArray = [];
  for (var i = array.length - 1; i >= 0; i--) {
    newArray.push(array[i]);
  }
  return newArray;
}

// define a function called reverse that takes a single parameter 'array'
// define a variable named newArray and assign it to an empty array
// create a for loop that checks each element of the parameter 'array' in reverse order
// push the parameter array at that index into the newArray variable
// return the newArray variable
