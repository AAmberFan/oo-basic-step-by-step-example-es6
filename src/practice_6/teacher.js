var Person = require("./person.js");
function Teacher(name,age,klass) {
    Person.call(this,name,age);
    this.klass = klass;
}
(function(){
    // 创建一个没有实例方法的类
    let Super = function(){};
    Super.prototype = Person.prototype;
    //将实例作为子类的原型
    Teacher.prototype = new Super();
})();
Teacher.prototype.constructor = Teacher;
Teacher.prototype.introduce = function () {
    if (this.klass==null){
        return Person.prototype.introduce.apply(this) +' I am a Teacher. I teach No Class.';
    } else {
        return Person.prototype.introduce.apply(this) +` I am a Teacher. I teach Class ${this.klass}.`;
    }
}
const teacher = new Teacher("Tom", 21);
console.log(teacher.introduce());
module.exports = Teacher;