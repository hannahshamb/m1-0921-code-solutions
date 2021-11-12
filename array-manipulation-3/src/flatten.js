/* exported flatten */
function flatten(array) {
  var newArray = [];
  for (var i = 0; i < array.length; i++) {
    if (array[i].length === undefined) {
      newArray.push(array[i]);
    } else {
      for (var j = 0; j < array[i].length; j++) {
        newArray.push(array[i][j]);
      }
    }
  }
  return newArray;
}

// define a function named flatten that takes a single parameter 'array'
// create a variable called newArray and set it to an empty array
// create a for loop that checks all of the items in the parameter 'array'
// if statement checks if the array at that index has a length that is undefined
// if true push the values of the items in the parameter 'array' to the newArray
// else, create another for loop that checks all the items of the sub array
// push the values of the items in the subarrays to the newArray
// return the newArray
