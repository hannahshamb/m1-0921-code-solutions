var student = {
  firstName: 'Hannah',
  lastName: 'Engelhardt',
  age: 27
};
var fullName = student.firstName + ' ' + student.lastName;
console.log('value of fullName: ', fullName);
student.livesInIrvine = true;
student.previousOccupation = 'Licensing Product Manager';
console.log('value of student.livesInIrvine: ', student.livesInIrvine);
console.log('value of student.previousOccupation: ', student.previousOccupation);
console.log(student);

var vehicle = {
  make: 'Aston Martin',
  model: 'DBS Superleggera 007 Edition',
  year: 2021
};
vehicle['color'] = 'grey';
vehicle['isConvertible'] = true;
console.log('value of vehicle: ', vehicle);

var pet = {
  name: 'Lily',
  type: 'Dog'
};
delete pet.name;
delete pet.type;
console.log('value of pet: ', pet);
