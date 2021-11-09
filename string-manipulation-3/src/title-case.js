/* exported titleCase */
function titleCase(title) {
  var titleWords = title.split(' ');
  var lowerCaseWords = ['and', 'or', 'nor', 'but', 'a', 'an', 'the', 'as', 'at', 'by', 'for', 'in', 'of', 'on', 'per', 'to'];
  var titleWord = '';
  var titleCapitalizedSentence = '';
  var addColon;
  var newChar;
  var nextCharCap;
  var newWord;
  for (var i = 0; i < titleWords.length; i++) {
    addColon = false;
    titleWord = titleWords[i];
    if (titleWord.charAt(titleWord.length - 1) === ':') {
      titleWord = titleWords[i].slice(0, -1);
      addColon = true;
    }
    titleWord = titleWord.charAt(0).toUpperCase() + titleWord.slice(1);
    nextCharCap = false;
    newWord = '';
    for (var k = 0; k < titleWord.length; k++) {
      if (nextCharCap) {
        newChar = titleWord.charAt(k).toUpperCase();
        nextCharCap = false;
      } else {
        newChar = titleWord.charAt(k);
        if (titleWord.charAt(k) === '-') {
          nextCharCap = true;
        }
      }
      newWord += newChar;
    }
    titleWord = newWord;
    for (var j = 0; j < lowerCaseWords.length; j++) {
      if (((i !== 0) && titleWords[i] === lowerCaseWords[j]) && (titleWords[i - 1].charAt(titleWords[i - 1].length - 1) !== ':')) {
        titleWord = titleWords[i].toLowerCase();
      }
    }
    if (titleWord.toLowerCase() === 'javascript') {
      titleWord = 'JavaScript';
    }
    if (titleWord.toLowerCase() === 'api') {
      titleWord = 'API';
    }
    if (addColon) {
      titleWord += ':';
    }
    titleCapitalizedSentence += titleWord;
    if (i !== titleWords.length - 1) { titleCapitalizedSentence += ' '; }
  }
  return titleCapitalizedSentence;
}

titleCase('the self-taught programmer: the definitive guide to programming professionally');
