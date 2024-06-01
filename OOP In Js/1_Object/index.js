// objects are collections of key-value pairs called properties. 
// Properties can hold any type of data, including other objects or functions.

//object literal method
const circle = {
    radius: 0.5,
    location: {
        x:1,
        y:2,
    },
    draw: function(){
        console.log("drawing...")
    }
};

circle.draw();




// =====================================




//factory function
function createCircle(radius){
    return {
        radius,// radius:radius,
        draw: function(){
            console.log("drawing...")
        }
    };
}
const circle1 = createCircle(1);
circle1.draw();




// =========================================




//constructor function
function Circle(radius) {
    // console.log("this",this);
    this.radius = radius;
    this.draw = function(){
        console.log("drwaing...");
    }
}
const circle2 = new Circle(1);
circle2.draw();

//constructor properties 
let x = {};  //let x = new Object();
new String(); //'', "", ``
new Boolean(); //true, false
new Number(); //1,2,3,...




// ========================================




//function are object
function Car(modelNo) {
    // console.log("this",this);
    this.modelNo = modelNo;
    this.start = function(){
        console.log("starting...");
    }
}
// console.log(Car.name);
// console.log(Car.length);
// console.log(Car.constructor);

// const Car2 = new Function('modelNo',`
// this.modelNo = modelNo;
//     this.start = function(){
//         console.log("starting...");
//     }
// `);
// const car1 = new Car2(123);
Car.call({}, 123);
Car.apply({}, [123]);

const car = new Car(123);
car.start();




// ============================================




//value vs Reference 
//value
let a = 10;
let b = a;
a=20;
console.log(a);
console.log(b);

// Reference  type  
let c ={value:10};
let d= c;
c.value = 20;
console.log(c);
console.log(d);

//value with function
let number = 10;
function increase(number){
    number++;
}
increase(number);
console.log(number);

//Reference with function
let obj = 10;
function increase(obj){
    obj.value++;
}
increase(obj);
console.log(obj);




// =================================================




//adding/removing properties
function Person(username){
    this.username= username;
    this.personInfo = function(){
        console.log('person infromation...');
    }
}

const person = new Person('yuti');

//adding
person.age = { age : 23 };
// person[address_pin] = {pin : 401402};

//remove
delete person.age;




// ======================================================




//Abstraction
function Circle(radius) {
    
    this.radius = radius;

    this.defaultLocation = { x: 0, y: 0 };

    this.computeOptimumLocation = function (){

    }

    this.draw = function(){
        this.computeOptimumLocation();

        console.log("drwaing...");
    }
}
const abs = new Circle(1);
abs.draw();




// ==========================================




//enumerating properties
for (let key in circle){
    if(typeof circle[key] !== 'function')
    // console.log(key);
    console.log(key, circle[key]);
}

const keys = Object.keys(circle);
console.log(keys);

if('radius' in circle)
    console.log('circle has a raduis');








