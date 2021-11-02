/* exported capitalizeWords */
function capitalizeWords(string) {
  var words = string.split(' ');
  var newString = '';
  for (var i = 0; i < words.length; i++) {
    newString += words[i].charAt(0).toUpperCase() + words[i].slice(1).toLowerCase();
    if (i !== words.length - 1) {
      newString += ' ';
    }
  }
  return newString;
}
