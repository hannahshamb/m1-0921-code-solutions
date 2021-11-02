/* exported getKeys */
function getKeys(object) {
  var keys = [];
  for (var key in object) {
    keys.push(key);
  }
  return keys;
}

// define a function 'getKeys' that take a single parameter 'object'
// define a variable 'keys' and assign it to an empty array
// create a for loop that checks for each property 'key' of the parameter 'object'
// add each of the property 'key's into the keys array
// return the keys array
