/* exported getValues */
function getValues(object) {
  var values = [];
  for (var key in object) {
    values.push(object[key]);
  }
  return values;
}

// define a function 'getValues' that take a single parameter 'object'
// define a variable 'values' and assign it to an empty array
// create a for loop that checks for each property 'key' of the parameter 'object'
// add each of the values from the property 'key's of the parameter 'object' into the values array
// return the values array
