/* exported swapChars */
function swapChars(firstIndex, secondIndex, string) {
  var swappedChars = '';
  for (var i = 0; i < string.length; i++) {
    if (i === firstIndex) {
      swappedChars += string.charAt(secondIndex);
    } else if (i === secondIndex) {
      swappedChars += string.charAt(firstIndex);
    } else swappedChars += string.charAt(i);
  }
  return swappedChars;
}
