//ES6
var Person = require("./person.js");
class Worker extends Person{
    constructor(name,age){
        super(name,age);
    }
    introduce(){
        let intro = super.introduce()+" I am a Worker. I have a job.";
        return intro;
    }
}
// const worker = new Worker("Tom", 21);
// console.log(worker.introduce());
module.exports = Worker;
