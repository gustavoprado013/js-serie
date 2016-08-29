const course = {};
course.name = 'ES6';
console.log(course.name);

const immutableCourse = require('./immutable')(course)

immutableCourse.name = 'ROCKS';
console.log(immutableCourse.name);
