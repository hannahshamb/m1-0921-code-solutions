/* exported tail */
function tail(array) {
  var newArray = [];
  for (var i = 0; i < array.length; i++) {
    if (i !== 0) {
      newArray.push(array[i]);
    }
  }
  return newArray;
}

// define a function called tail that takes a single parameter 'array'
// define a variable named newArray and assign it to an empty array
// create a for loop that checks each element of the parameter 'array'
// declare an if statement that checks if the index of the area is at not at zero
// if the index is not at 0, push the array at that index into the newArray variable
// return the newArray variable
