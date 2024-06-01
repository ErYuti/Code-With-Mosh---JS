//function are object
function Circle(radius) {
  this.radius = radius;
  this.draw = function () {
    console.log("drawing...");
  };
}
console.log(Circle.name);
console.log(Circle.length);
console.log(Circle.constructor);

const Circle1 = new Function( 'raduis', `
    this.radius= radius;
    this.draw = function(){
       console.log("drawing...");
    }
    `);
const Circle = new Circle(1);
// method 
Car.call({}, 1);
Car.apply({}, [1]);

const another = new Circle(123);

