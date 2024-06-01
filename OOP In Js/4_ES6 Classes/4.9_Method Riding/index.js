//Method Riding
class Shape {
    move() {
        console.log('move')
    }
}

class Circle extends Shape {
    move() {
        super.move();
        console.log('circle move')
    }
}

const c = new Circle();

console.log(c);
console.log(c.move());