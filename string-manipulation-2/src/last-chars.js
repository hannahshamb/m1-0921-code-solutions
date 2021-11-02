/* exported lastChars */
function lastChars(length, string) {
  var charsToRemove = string.length - length;
  var newString = string.slice(charsToRemove);
  if (string.length < length) {
    newString = string;
  }
  return newString;
}
