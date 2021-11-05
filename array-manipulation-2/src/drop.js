/* exported drop */
function drop(array, count) {
  var newArray = [];
  for (var i = count; i < array.length; i++) {
    if (count > array.length) {
      newArray = array;
    } else newArray.push(array[i]);
  }
  return newArray;
}

// create a for loop that checks each element of the array starting at i = count
// create an if statement that checks if the parameter count is greater than the parameter array length
// if the parameter count is greater than the parameter array length, assign the array value to the newArray
// else push the array to the newArray
// return the newArray
