/* exported equal */
function equal(first, second) {
  var matches;
  if ((first.length === 0) && (second.length === 0)) {
    matches = true;
  } else if (first.length !== second.length) {
    matches = false;
  } else {
    for (var i = 0; i < first.length; i++) {
      if ((first[i] === second[i])) {
        matches = true;
      } else { matches = false; break; }
    }
  }
  return matches;
}

// define a function named equal that takes two parameters 'first' and 'second'
// create a variable named matches
// create a for loop that checks all the items of the 'first' parameter
// create an if statement that checks if the first array at index i is equal to the second array at the same index
// if true, set the variable matches equal to true
// else set the variable matches equal to false and break
// return matches
