/* exported capitalize */
function capitalize(word) {
  var upperCaseFirstLetter = word.charAt(0).toUpperCase();
  var remainingLowerCaseWord = '';
  for (var i = 1; i < word.length; i++) {
    remainingLowerCaseWord += word.charAt(i).toLowerCase();
  }
  var finalWord = upperCaseFirstLetter + remainingLowerCaseWord;
  return finalWord;
}

// define a function called capitalize that takes a single parameter "word"
// define a variable called upperCaseFirstLetter that separates the first character from the word and capitalizes it
// define a variable called remaingLowerCaseWord and set it to an empty string (later to be filled in by a for loop)
// create a for loop to check each of the characters starting at index 1
// add separate the character at index i and lowercase it, then add the remainingLowerCaseWord variable to that value and reassign it to itself
// outside of the loop, concatenate the upperCaseFirstLetter and remainingLowerCaseWords together to assign it to a finalWord variable
// return the finalWord variable
