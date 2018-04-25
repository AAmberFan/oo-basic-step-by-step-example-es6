//ES5 method1 passed
// function Person(name,age){
//   this.name = name;
//   this.age = age;
// }
// Person.prototype.introduce=function(){
//   return `My name is ${this.name}. I am ${this.age} years old.`
// };

//ES6
class Person{
  constructor(name,age){
    this.name = name;
    this.age = age;
  }
  introduce(){
    return `My name is ${this.name}. I am ${this.age} years old.`;
  }
}
module.exports = Person;
