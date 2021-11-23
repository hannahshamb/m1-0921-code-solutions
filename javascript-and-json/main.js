var books = [
  {
    isbn: '9781507661789',
    title: 'Pride and Prejudice',
    author: 'Jane Austen'
  },
  {
    isbn: '9780333791035',
    title: 'The Great Gatsby',
    author: 'F Scott Fitzgerald'
  },
  {
    isbn: '9780198829195',
    title: '1984',
    author: 'George Orwell'
  }
];
var stringifiedBooks = JSON.stringify(books);
console.log('JSON stringified books', stringifiedBooks, 'type of =', typeof stringifiedBooks);

var student = '{ "id" : 1234,"name" : "Hannah" }';
console.log('JSON String student', student, 'type of student = ', typeof student);
var parsedStudent = JSON.parse(student);
console.log('JSON parsed student', parsedStudent, 'type of student =', typeof parsedStudent);
