// FACTORY FUNCTION

function personMaker(name , age){
    const person = {
        name: name,
        age: age,
        talk() {
            console.log(`Hii my name is ${this.name}`);
        }
    }
    return person;
}

let per1 = personMaker("saika" , 20);
let per2 = personMaker("saima" , 22);

//CONSTRUCTORS  -> doesn't return anything & start with capital

function Person(name , age){
    this.name = name;
    this.age = age;
}

Person.prototype.talk = function(){
    console.log(`Hii , my name is ${this.name}`);
}

let person1 = new Person("saira" , 20);
let person2 = new Person("saina" , 22);

// CLASS 

class Person{
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    talk() {
        console.log(`Hii , my name is ${this.name}`);
    }
}

let p1 = new Person("zubia" , 20);
let p2 = new Person("eve" , 22);

// INHERITENCE --> 

class Person {
    constructor(name , age){
        this.name = name;
        this.age = age
    }
    talk() {
        console.log(`Hii my name is ${this.name}`)
    }
}

class Student extends Person{
    constructor(name , age , marks){
        super(name , age);
        this.marks = marks;
    }
}
let stu1 = new Student("sonu" , 15 , 99);


class Teacher extends Person{
    constructor(name , age , subject){
        super(name , age);
        this.subject = subject;
    }
}

let T1 = new Teacher("Anu" , 25 , "Science");