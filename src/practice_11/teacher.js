//import Student from "./student";
let Student  = require("./student");
let Person = require("./person");
let Class = require("./class");
class Teacher extends Person{
    constructor(id,name,age,klasses){
        super(id,name,age);
        this.klasses = klasses;
    }
    introduce(){
        if(this.klasses==null){
            return super.introduce()+` I am a Teacher. I teach No Class.`;
        }else{
            let res =  super.introduce()+ ` I am a Teacher. I teach Class `;
            let classNum = this.klasses.map(x=>x.number);
            res+= classNum.join(", ");
            res+='.';
            return res;
        }
    }
    isTeaching(student){
        if(this.klasses.includes(student.klass)){
            return true;
        }else{
            return false;
        }
    }
}
module.exports = Teacher;
