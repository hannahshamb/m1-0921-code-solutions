var colors = ['red',
  'white',
  'blue'];

console.log('first value: ', colors[0]);
console.log('second value: ', colors[1]);
console.log('third value: ', colors[2]);

var phrase = colors[0] + ', ' + colors[1] + ', and ' + colors[2];
console.log('America is ', phrase);

colors[2] = 'green';
phrase = colors[0] + ', ' + colors[1] + ', and ' + colors[2];
console.log('Mexico is ', phrase);
console.log('value of colors: ', colors);

var students = ['Hannah Engelhardt',
  'Emma Watson',
  'Daniel Radcliffe',
  'Rupert Grint'];

var numberOfStudents = students.length;
console.log('There are', numberOfStudents, 'students in the class.');

var lastIndex = numberOfStudents - 1;
var lastStudent = students[lastIndex];
console.log('The last student in the array is', lastStudent);
console.log('value of students: ', students);
