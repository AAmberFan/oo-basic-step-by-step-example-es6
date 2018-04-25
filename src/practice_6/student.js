var Person = require("./person.js");

function Student(name,age,klass) {
    Person.call(this,name,age );
    this.klass = klass;
   //Student.prototype.introduce.apply(this);
}
(function(){
    // 创建一个没有实例方法的类
    let Super = function(){};
    Super.prototype = Person.prototype;
    //将实例作为子类的原型
    Student.prototype = new Super();
})();
Student.prototype.constructor = Student;
Student.prototype.introduce= function () {
    //Student.prototype.introduce.apply(this,arguments);

    return Person.prototype.introduce.apply(this)+` I am a Student. I am at Class ${this.klass}.`;
};
const student = new Student("Tom", 21, 2);
console.log(student.introduce());
module.exports = Student;