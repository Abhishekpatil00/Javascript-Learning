// # Primitive

// this are all call by value i.e we use a copy of memory to do changes

// 7 types: String, number, boolean, null(empty), undefined, symbol, bigint

const id = Symbol('1234');
const anotherId = Symbol('1234');

console.log(id);
console.log(anotherId);

console.log(id === anotherId);

const bigNumber = 988663296469296849468264n

const temp = null

// js is dynamically typed 


// # reference type or Non Primitive

// array, objects, funtions
// return type for non primitive is object

const heros = ["Hunuman", "Ram", "Lakshman" ]; // Arrays
// Object
let myObject = {
    name : " Abhishek ",
    age : 25,
}

const myFunction = function(){

    console.log("Hello World");
    
}

console.log(typeof temp );
console.log(typeof anotherId);
console.log(typeof bigNumber);
console.log(typeof myFunction);
console.log(typeof myObject  );
console.log(typeof heros );
console.log(typeof temp );








