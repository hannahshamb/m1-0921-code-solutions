/* exported capitalizeWord */
function capitalizeWord(word) {
  var capitalizedWord = '';
  if (word.toLowerCase() === 'javascript') {
    capitalizedWord = 'JavaScript';
  } else {
    var firstLetter = word.charAt(0).toUpperCase();
    var remainingWord = word.slice(1).toLowerCase();
    capitalizedWord = firstLetter + remainingWord;
  }
  return capitalizedWord;
}

// define a function called capitalizeWord that takes a single parameter 'word'
// define a variable called capitalizedWord and assign it to an empty string
// create an if statement that checks if the lowercased version of the parameter 'word' is strictly equal to 'javascript'
// if true, assign the value of 'JavaScript' to capitalizedWord
// create an else statement with opening code block
// define a variable called firstLetter that is assigned to the value of the expression that accesses the first character of the parameter 'word' and uses the toUpperCase method to uppercase it
// define a variable called remainingWord that is assigned to the value of the expression that slices the first character of the word off and uses the toLowerCase method to lowercase the remainder of the word
// assign the value of the expression that concatenates the firstLetter and the remainingWord to capitalizedWord
// return capitalizedWord
