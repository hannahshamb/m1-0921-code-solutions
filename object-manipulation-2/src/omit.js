/* exported omit */
function omit(source, key) {
  var newObject = {};
  var add = false;
  for (var prop in source) {
    add = true;
    for (var i = 0; i < key.length; i++) {
      if (key[i] === prop) {
        add = false;
      }
    }
    if (add) {
      newObject[prop] = source[prop];
    }
  }
  return newObject;
}
// define a function named omit that takes 2 parameters 'source' and 'keys'
// define a variable named newObject that is assigned to an empty object
// define a variable named add and assign it to false
// create a for in loop that checks all the properties of the parameter 'source'
// assign the value true to the variable add
// create a for loop that checks all the values in the parameter 'key'
// create an if statement that checks if the prop is not equal to the 'key' parameter at i
// if true, assign the value false to the add variable
// create an if statement that checks if add is true
// if add is true, add the property and value of source ot the newObject
// return the newObject
