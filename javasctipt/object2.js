'use strict'
'allow pasting'
function Person(name) {
  this.name = name || 'person';
  this.think = function () {
    console.log(this.name + ' think.');
  }
}
Person.prototype.eat = function () {
  console.log(this.name + ' eat.');
}
var lzhn = new Person();
lzhn.think();
lzhn = new Person('lzhn');
lzhn.think();
var wen = new Person('wen');
console.log(lzhn.think === wen.think);
console.log(lzhn.eat === wen.eat);
console.log('***');
console.log(wen.prototype === lzhn.prototype);
console.log(Person.prototype.constructor === Person);
console.log(Person.prototype === Object.getPrototypeOf(wen));
console.log('***');
console.log(wen.prototype); //无prototype属性，undefined
console.log(wen.__proto__);
console.log(Object.getPrototypeOf(wen));
