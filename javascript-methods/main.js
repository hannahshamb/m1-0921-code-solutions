// Math Object //

var number1 = 5;
var number2 = 7;
var number3 = 3;

var maximumValue = Math.max(number1, number2, number3);
console.log('maximumValue: ', maximumValue);

var heroes = [
  'Black Widow',
  'Wonder Woman',
  'Catwoman',
  'Storm'
];

var randomNumber = Math.random() * heroes.length;
var randomIndex = Math.floor(randomNumber);
var randomHero = heroes[randomIndex];
console.log('randomIndex: ', randomIndex);
console.log('randomHero: ', randomHero);

var library = [
  {
    title: 'Harry Potter',
    author: 'JK Rowling'
  },
  {
    title: 'Pride and Prejudice',
    author: 'Jane Austen'
  },
  {
    title: 'The Great Gatsby',
    author: 'F Scott Fitzgerald'
  }
];

// Array Methods //
var lastBook = library.pop();
var firstBook = library.shift();
console.log('lastBook: ', lastBook);
console.log('firstBook: ', firstBook);

var js = {
  title: 'JavaScript for Impatient Programmers',
  author: 'Dr. Axel Rauschmayer'
};
var css = {
  title: 'CSS Secrets',
  author: 'Lea Verou'
};

library.push(js);
library.unshift(css);
library.splice(1, 1);

console.log('library: ', library);

// String Methods //
var fullName = 'Hannah Engelhardt';
var firstAndLastName = fullName.split(' ');
console.log('firstAndLastName: ', firstAndLastName);

var firstName = firstAndLastName[0];
var sayMyName = firstName.toUpperCase();
console.log('sayMyName: ', sayMyName);
