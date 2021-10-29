/* exported getWords */
function getWords(string) {
  var newArray = [];
  if (string === '') {
    // newArray stays the same
  } else newArray = string.split(' ');
  return newArray;
}

// define a function named getWords that takes a single parameter 'string'
// define a variable named newArray and assign an empty array to it
// create and if statement that checks if the parameter 'string' is strictly equal to an empty string
// if this expression is true, the newArray stays an empty array
// if this expression is false, the the parameter 'string' is divided into words (since we are calling the split method with a space as an argument) and stored as an array into newArray
// the newArray is returned
