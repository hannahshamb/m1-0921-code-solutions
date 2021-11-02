/* exported numVowels */
function numVowels(string) {
  var vowels = ['a', 'A', 'i', 'I', 'e', 'E', 'o', 'O', 'u', 'U'];
  var stringVowels = [];
  for (var i = 0; i < string.length; i++) {
    for (var j = 0; j < vowels.length; j++) {
      if (vowels[j] === string[i]) {
        stringVowels += string[i];
      }
    }
  }
  return stringVowels.length;
}
