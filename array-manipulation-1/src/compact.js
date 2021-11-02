/* exported compact */
function compact(array) {
  var omissions = [false, null, NaN, 0, -0, undefined, ''];
  var newArray = [];
  for (var i = 0; i < array.length; i++) {
    var passes = true;
    for (var j = 0; j < omissions.length; j++) {
      if ((array[i] === omissions[j]) || (Number.isNaN(array[i]))) {
        passes = false;
      }
    }
    if (passes === true) {
      newArray.push(array[i]);
    }
  }

  return newArray;
}

// define a function called compact that takes a single parameter 'array'
// define a variable omissions that is assigned to the array of items to be omitted from the 'array' parameter
// define a newArray variable and assign it to an empty array
// create a for loop that checks each element of the parameter 'array'
// create a variable passes and assign it to the value of true
// create a nested for loop that checks each element of the omissions array
// declare an if statement that checks if the value of the parameter 'array' is strictly equal to the value of the omissions or if the value of the parameter 'array' is NaN
// if true, update the assignment on the variable passes to false
// in the parent for loop, declare an if statement that checks if passes are true
// if passes are true, push the value of the parameter 'array' into the newArray variable
// return the newArray variable
