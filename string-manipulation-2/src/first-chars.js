/* exported firstChars */
function firstChars(length, string) {
  var charsToRemove = string.length - length;
  var newString = string.slice(0, -charsToRemove);
  if (string.length < length) {
    newString = string;
  }
  return newString;
}
