/* exported toObject */
function toObject(keyValuePair) {
  var object = {};
  object[keyValuePair[0]] = keyValuePair[1];
  return object;
}

// define a function that takes a single parameter 'keyValuePair'
// define a variable 'object' and assign it to an empty object
// take the value of the keyValuePair at index 0 and add it as a property on the object using bracket notation, then assign the value of it to the keyValuePair at index 1
// return the object
