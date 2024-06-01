//Inheritance

// ----------------------------

//Prototypical Inheritance

//Prototype -> parent 
//sub/Child -> this object inheritance all same properties from the parent object
//objectBase - prototype => root object
//x - is the child object
//x child object that link => x object proporties inheritance from the objectBase;
//y - is the child object
//y child object that link => y object proporties inheritance from the objectBase;

// A prototype is just a regular object => every object has a prototype = parent

let x ={};
console.log(x);

let y = {};
console.log(y);

const checkInheritanceProperties = Object.getPrototypeOf(x) === Object.getPrototypeOf(y);
console.log(checkInheritanceProperties);

x.toString()



// ============================================


//multi-level Inheritance

//objectBase - prototype => root object
//arrayBase - is the child array that link objectBase - arraytBase object proporties inheritance from the objectBase;
//myArray - is the subchild array that link arrayBase - myArray array proporties inheritance from the arraytBase;

let myArray = [];
console.log(myArray);

//Objects created by a gievn constructor will have the same prototype.



// ==========================================================

// Property Attributes 
let person ={ name : 'yuti'};
console.log(person);
console.log(person.toString());

for( let key in person)
    console.log(key);


console.log(Object.keys(person));

// -------------------------------------------

let objectBase = Object.getPrototypeOf(person);
let descriptor = Object.getOwnPropertyDescriptor(objectBase, 'toString');
console.log(descriptor);


// --------------------------------------------------
Object.defineProperty(person, 'name', {
    writable: false,
    enumerable: false,
    configurable: false,
});

person.name = 'jonn';
console.log(person);


console.log(Object.keys(person));

delete person.name;
console.log(person);




// =============================================


// Constructor Prototypes 
function Circle(radius){
    this.radius = radius;
}

const Circle = new Circle(1);




// =================================================


// Instance memebers vs prototype members 

function Circlee(radius){
    // Instance memebers
    this.radius = radius;
    this.move = function(){
        console.log('move');
    }
}

// Circlee.prototype === c1.__proto__

// prototype members 
Circlee.prototype.draw =  function(){
    // this.move();
    console.log('draw..');
}

const c1 = new Circlee(1);
const c2 = new Circlee(1);

console.log(c1);
console.log(c2);

Circlee.prototype.toString = function() {
    return 'Circle with radius' + this.radius;
}



// =================================================



// Iterating Properties
for (let key in c1) console.log(key);



// ==================================================

//Avoid Extending Bulit-in Objects
//don't modify objects you don't own

Array.prototype.shuffle = function() {

};
const array = [];
array.shuffle();