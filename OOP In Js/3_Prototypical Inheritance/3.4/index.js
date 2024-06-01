
//Method Overriding


// ===============================================

//Polymorphism
function Triangle() {

}
extend(Triangle, Shape);

Triangle.prototype.duplicate = function (){
    console.log('dulicate triangle');
}

const shapes = [
    new Circle(),
    new Triangle()
];

for (let shape of shapes){
    shape.duplicate();
}



