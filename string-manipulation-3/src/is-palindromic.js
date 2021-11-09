/* exported isPalindromic */
function isPalindromic(string) {
  var reverseString = '';
  var palindrome = false;
  for (var i = string.length; i >= 0; i--) {
    reverseString += string.charAt(i);
  }
  reverseString = reverseString.replace(' ', '');
  if (reverseString === string.replace(' ', '')) {
    palindrome = true;
  }
  return palindrome;
}

// define a function named isPalindromic that takes a single parameter 'string'
// define a variable named reverseString that is assigned to an empty string
// create a for loop that checks each character of the parameter 'string' in reverse
// add the characters to the reverseString
// remove spaces from the reverseString
// create an if statement that checks if the reverseString is strictly equal to the parameter 'string' with spaces removed
// if true, return true
