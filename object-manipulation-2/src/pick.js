/* exported pick */
function pick(source, key) {
  var newObject = {};
  for (var prop in source) {
    for (var i = 0; i < key.length; i++) {
      if (source[prop] !== undefined) {
        if (key[i] === prop) {
          newObject[prop] = source[key[i]];
        }
      }
    }
  }
  return newObject;
}

// define a function named pick that takes 2 parameters 'source' and 'keys'
// define a variable named newObject that is assigned to an empty object
// create a for in loop that checks all the properties of the parameter 'source'
// create a for loop that checks all the values in the parameter 'key'
// create an if statement that checks to make sure that the value of 'source' at prop is not undefined
// create an if statement that checks if the prop is strictly equal to the 'key' parameter at i
// if true, use bracket notation to add the property and value into the newObject
// return the newObject
