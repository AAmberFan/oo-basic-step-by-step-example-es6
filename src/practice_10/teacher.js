let Person = require("./person");
let Class = require("./class");
class Teacher extends Person{
    constructor(id,name,age,klasses){
        super(id,name,age);
        this.klasses = klasses;
    }
    introduce(){
        if(this.klasses ==null){
            return super.introduce()+` I am a Teacher. I teach No Class.`;
        }else{
            let res =  super.introduce()+ ` I am a Teacher. I teach Class `;
            let classNum = klasses.map(x=>x.number);
            res+= classNum.join(", ");
            res+='.';
            return res;
        }
    }
}
module.exports = Teacher;
let klasses = [new Class(2), new Class(3)];
const teacher = new Teacher(1, "Tom", 21, klasses);
console.log(teacher.introduce());