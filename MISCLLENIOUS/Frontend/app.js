// let arr = [1,2,3,4,5,6,7,8]
// let arr2 = [5,6,7,8,9,0];
// arr.sayHello = () => {
//     console.log(" hello. iam arry");
// }

// arr2.sayHello = () => {
//     console.log(" hello. iam arry");
// }

// Factory Function 

// function personMakers( name , age ) {
//     const person = {
//          name : name,
//          age : age,
//          talk(){
//          console.log(`hello i am ${this.name}`);
//         },
//     };
//     return person;
// }

// Constructor function or New Operators 
// constructor--> dosent return anyting & Start with Capital Letters.

// function Person(name  , age) {
//     this.name = name,
//     this.age = age
// }

// Person.prototype.talk = function() {
//     console.log(`Hi,my name is ${this.name}`);
// }
// let p1 = new Person("Pratham", 23);
// let p2 = new Person("Shruti", 22);


// Classes 
// Classes is a template for creatinh a object 

// class Person {
//     constructor (name,age) {
//      this.name = name;
//      this.age = age;
//     }
//     talk () {
//         console.log(`Hi , My Name is ${this.name}`);
//     }
// }
// let p1 = new Person ("Pratham",  23);
// let p2 = new Person ("Shruti",   22);

// Inheritance --> Its a Machanishms for creating a  new Instances of 
// of a class baseed on existing class . 

// Parents --> (base class) 
// Child class 

// There are two keyword which we have used 
// a> extends --> used to inhertis the properties 
// b> super ---> is  a keyword  which is a Parets class kekywords.
class Person {
    constructor (name,age){
         console.log("Person class constructor");
         this.name = name;
         this.age = age;
    }
    talk () {
        console.log(`HI , I am ${this.name}`);
    }
}

class Student extends Person {
    constructor (name , age , marks) {
         console.log("Student class constructor");
         super (name,age) // Parets class constructor being called.
         this.marks = marks;
    }
}
class Teacher extends Person {
    constructor (name , age , subjects) {
         super (name,age) // Parets class constructor being called.
         this.subjects = subjects;
    }
}
