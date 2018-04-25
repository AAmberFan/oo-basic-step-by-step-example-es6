function Person(name,age){
    this.name = name;
    this.age = age;
}
Person.prototype.introduce = function () {
    return `My name is ${this.name}. I am ${this.age} years old.`;
}
const person = new Person("Tom", 21);
console.log(person.introduce());
module.exports = Person;