
// Calling the super Constructor 
function Car(model){
    this.model = model;
}

function Motorcar(name, model){
    //super Constructor 
    Car.call(this, model);

    this.name = name;
}

Motorcar.prototype = Object.create(Motorcar.prototype);
Motorcar.prototype.constructor = Motorcar;

const car = new Car(1);
console.log(car);
const motorcar  = new Motorcar ('abc', 2);
console.log(motorcar);


