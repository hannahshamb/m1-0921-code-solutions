/* exported isUnderFive,
            isEven,
            startsWithJ,
            isOldEnoughToDrink,
            isOldEnoughToDrive,
            isOldEnoughToDrinkAndDrive,
            categorizeAcidity,
            introduceWarnerBro
 */

function isUnderFive(number) {
  return (number < 5);
}

function isEven(number) {
  return (number % 2 === 0);
}

function startsWithJ(string) {
  return (string.charAt(0) === 'J');
}

function isOldEnoughToDrink(person, age) {
  return (person.age > 21);
}

function isOldEnoughToDrive(person, age) {
  return person.age > 16;
}

function isOldEnoughToDrinkAndDrive(person, age) {
  return false;
}

function categorizeAcidity(pH) {
  var message;
  if ((pH >= 0) && (pH < 7)) {
    message = 'acid';
  } else if (pH === 7) {
    message = 'neutral';
  } else if ((pH > 7) && (pH <= 14)) {
    message = 'base';
  } else { message = 'invalid pH level'; }
  return message;
}

function introduceWarnerBro(name) {
  var message;
  if ((name === 'yakko') || (name === 'wakko')) {
    message = 'We\'re the warner brothers!';
  } else if (name === 'dot') {
    message = 'I\'m cute~';
  } else {
    message = 'Goodnight everybody!';
  }
  return message;
}
