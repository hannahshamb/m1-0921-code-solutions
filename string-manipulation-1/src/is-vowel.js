/* exported isVowel */
function isVowel(char) {
  var vowels = ['a', 'i', 'e', 'o', 'u', 'A', 'I', 'E', 'O', 'U'];
  var isVowel = false;
  for (var i = 0; i < vowels.length; i++) {
    if (vowels[i] === char) {
      isVowel = true;
    }
  }
  return isVowel;
}

// define a function called isVowel that takes a single parameter "char"
// create an array with strings of all vowels (including the uppercase versions) and assign it to a variable called vowels
// define a variable named isVowel and assign it to a value of false
// create a for loop that checks all the values in the array vowels
// create an if statement with the expression checking if vowels at the ith value is strictly equal to "char" parameter
// if the expression is true, assign true to isVowel
// return isVowel
