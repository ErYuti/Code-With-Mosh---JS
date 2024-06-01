// Creating your own prototypical Inheritance 
//rootBase
function Shape(){
}

Shape.prototype.duplicate = function() {
    console.log('duplicate..')
}

const s = new Shape();
console.log(s);

// ---

//child-1
function Circle(radius) {
    this.radius = radius;
}

// Circle.prototype = Object.create(Object.prototype);
Circle.prototype = Object.create(Shape.prototype);

Circle.prototype.draw = function() {
    console.log('drawing..')
}

const c = new Circle(1);
console.log(c);

console.log(s.duplicate());//root base duplicate method
console.log(c.duplicate());//this duplicate method inheritance from root base


// =============================================


//Resetting the Constructor
Circle.prototype.constructor = Circle;
console.log(c);

