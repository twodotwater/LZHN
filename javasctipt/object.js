'use strict'
'allow pasting'
var Person = {
  name: 'lzhn',
  age: 26,
  think: function () {
    console.log('think');
  }
};
var Animal = {
  name: 'animal',
  eat: function () {
    console.log('eat');
  }
};
function createAnimal(name) {
  var a = Object.create(Animal);
  a.name = name;
  return a;
}
var mm = {
  name: 'mm'
};
var nn = {
  name: 'nn'
}
mm.__proto__ = Person;
nn.__proto__ = Person;
mm.think === nn.think;
/*
true
*/
Person.__proto__.eat = function () {
  console.log('eat');
}
mm.eat();
mm.eat === nn.eat;
console.log(mm.name);
mm.think();
//mm.eat();
mm.__proto__ = Animal;
console.log(mm.name);
//mm.think();
mm.eat();
var a = createAnimal('dog');
console.log(a.name);
