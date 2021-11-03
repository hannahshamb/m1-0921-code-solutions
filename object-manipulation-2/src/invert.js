/* exported invert */
function invert(source) {
  var invertedObject = {};
  var newProps = [];
  var newValues = [];
  for (var prop in source) {
    newValues.push(prop);
    newProps.push(source[prop]);
  }
  for (var i = 0; i < newProps.length; i++) {
    invertedObject[newProps[i]] = newValues[i];
  }
  return invertedObject;
}
