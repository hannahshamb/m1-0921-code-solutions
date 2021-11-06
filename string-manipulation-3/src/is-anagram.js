/* exported isAnagram */
function isAnagram(firstString, secondString) {
  var anagram;
  var stringCheck = firstString;
  for (var i = 0; i < firstString.length; i++) {
    firstString = firstString.replace(' ', '');
    stringCheck = stringCheck.replace(' ', '');
    for (var j = 0; j < secondString.length; j++) {
      secondString = secondString.replace(' ', '');
      if (firstString.charAt(i) === secondString.charAt(j)) {
        secondString = secondString.replace(secondString.charAt(j), '');
        stringCheck = stringCheck.replace(firstString.charAt(i), '');
      }
    }
  }
  if ((secondString === '') && (stringCheck === '')) {
    anagram = true;
  } else anagram = false;
  return anagram;
}

// define a function named isAnagram that takes two parameters 'firstString' and 'secondString'
// create a variable called anagram
// create a variable called stringCheck and set it to the value of the firstString
// create a for loop that checks all of the characters in firstString
// take spaces out of the firstString
// create a for loop that checks all of the characters in the secondString
// take spaces out of the secondString
// create an if statement that checks if character in the first string is strictly equal to the characters in the second string
// if true, remove the character from the second string and add it to the stringCheck variable
// remove the character at firstString i in stringCheck
// create an if statement that checks if the secondString is strictly equal to an empty string and if the stringCheck is strictly equal to an empty string
// if true, set anagram to true
// else set anagram to false
// return anagram
