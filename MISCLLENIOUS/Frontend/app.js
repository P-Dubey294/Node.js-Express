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

function Person(name  , age) {
    this.name = name,
    this.age = age
}

Person.prototype.talk = function() {
    console.log(`Hi,my name is ${this.name}`);
}
let p1 = new Person("Pratham", 23);
let p2 = new Person("Shruti", 22);