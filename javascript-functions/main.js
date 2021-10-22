function convertMinutesToSections(minutes) {
  var seconds = minutes * 60;
  return seconds;
}
var convertMinutesToSectionsResult = convertMinutesToSections(5);
console.log('convertMinutesToSectionsResult:', convertMinutesToSectionsResult);

function greet(name) {
  var greeting = 'Hey, ' + name;
  return greeting;
}
var greetResult = greet('Beavis');
console.log('greetResult: ', greetResult);

function getArea(width, height) {
  var area = width * height;
  return area;
}
var getAreaResult = getArea(17, 42);
console.log('getAreaResult: ', getAreaResult);

function getFirstName(person) {
  var firstName = person.firstName;
  return firstName;
}
var getFirstNameResult = getFirstName({ firstName: 'Lelouche', lastName: 'Lamperouge' });
console.log('getFirstNameResult: ', getFirstNameResult);

function getLastElement(array) {
  var lastElementIndex = array.length - 1;
  var lastElement = array[lastElementIndex];
  return lastElement;
}
var getLastElementResult = getLastElement(['propane', 'and', 'propane', 'accessories']);
console.log('getLastElementResult: ', getLastElementResult);
