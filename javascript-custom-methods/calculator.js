/* exported calculator */
var calculator = {
  add: function (x, y) {
    return (x + y);
  },
  subtract: function (x, y) {
    return (x - y);
  },
  multiply: function (x, y) {
    return (x * y);
  },
  divide: function (x, y) {
    return (x / y);
  },
  square: function (x, y) {
    return (x ** 2);
  },
  sumAll: function (numbers) {
    var sum = 0;
    for (var i = 0; i < numbers.length; i++) {
      sum += numbers[i];
    }
    return sum;
  },
  getAverage: function (numbers) {
    var sum = 0;
    for (var i = 0; i < numbers.length; i++) {
      sum += numbers[i];
    }
    var average = sum / numbers.length;
    return average;
  }
};
