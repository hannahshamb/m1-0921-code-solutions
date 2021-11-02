/* exported truncate */
function truncate(length, string) {
  var beginningString = string.slice(0, length);
  var abbreviatedString = beginningString + '...';
  return abbreviatedString;
}

// define a function named truncate that takes 2 parameters 'length' and'string'
// define a variable named beginningString that uses the slice method on the parameter 'string' that cuts off parameter'length'amount of characters of the string
// define a variable named abbreviatedString that concatenates the beginningString with a string of ellipses '...'
// return abbreviatedString
