'use strict'
'allow pasting'
function Person(name) {
  this.name = name || 'person';
  this.think = function () {
    console.log(this.name + ' think.');
  }
}
function Student(name) {
  Person.call(this, name);
  this.study = function () {
    console.log(name + ' study.');
  }
}
var s = new Student('lzhn');
s.name;
//s.think();
s.study();
console.log('***');
//extends
Student.prototype = Object.create(Person.prototype);
Student.prototype.constructor = Student;
s.name;
s.think();
s.study();
