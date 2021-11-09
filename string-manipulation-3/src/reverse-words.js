/* exported reverseWords */
function reverseWords(string) {
  var stringArray = string.split(' ');
  var reverseSentence = '';
  var reverseWord = '';
  for (var i = 0; i < stringArray.length; i++) {
    reverseWord = '';
    for (var j = stringArray[i].length; j >= 0; j--) {
      reverseWord += stringArray[i].charAt(j);
    }
    reverseSentence += reverseWord;
    if (i !== stringArray.length - 1) { reverseSentence += ' '; }
  }
  return reverseSentence;
}
