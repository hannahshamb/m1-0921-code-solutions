/* exported initial */
function initial(array) {
  var newArray = [];
  for (var i = 0; i < array.length; i++) {
    if (i !== (array.length - 1)) {
      newArray.push(array[i]);
    }
  }
  return newArray;
}

// define a function called initial that takes a single parameter 'array'
// define a variable named newArray and assign it to an empty array
// create a for loop that checks each element of the parameter 'array'
// declare an if statement that checks if the index of the area is at not at the last index of the array
// if the index is not at 0, push the array at that index into the newArray variable
// return the newArray variable
