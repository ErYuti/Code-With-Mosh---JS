
//Intermediate Function Inheritance
function extend(Child, Parent){
    Square.prototype = Object.create(Parent.prototype);
    Square.prototype.constructor = Child;
}
extend(Square, Shape);

//child-2
function Square (size){
    this.size = size
}

const sq = new Square(10);
console.log(sq);



// ==============================================

//Method Overriding


