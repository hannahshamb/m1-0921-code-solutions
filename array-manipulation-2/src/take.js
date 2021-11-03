/* exported take */
function take(array, count) {
  var newArray = [];
  for (var i = 0; i < count; i++) {
    if (count > array.length) {
      newArray = array;
    } else newArray.push(array[i]);
  }
  return newArray;
}

// define a function named take that has 2 parameters 'array' and 'count'
// create a variable named newArray and assign it to an empty array
// create a for loop that checks each element of the parameter array up to the 'count' value
// create an if statement that checks if the parameter count is greater than the parameter array length
// if the parameter count is greater than the parameter array length, assign the array value to the newArray
// else push the value of the array at each i to the newArray
// return the newArray
