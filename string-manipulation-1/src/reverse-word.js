/* exported reverseWord */
function reverseWord(word) {
  var reverseWord = '';
  for (var i = word.length - 1; i >= 0; i--) {
    reverseWord += word[i];
  }
  return reverseWord;
}

// define a function named reverseWord that takes a single parameter 'string'
// define a variable named reverseWord and assign it to an empty string
// create a for loop that checks each character in the parameter 'string' in backwards order
// add the character to the reverseWord variable
// return the reverseWord variable
