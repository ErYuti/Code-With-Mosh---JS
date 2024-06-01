//Camel Notation : oneTwoThreeFour
//Pascal Notaion : OneTwoThreFour


//constructor function
function Circle(radius) {
    this.radius= radius;
    this.location= {
        x:1,
        y:2,
    };
    this.isVisible = true;
    this.draw = function(){
        console.log("drawing...");
    }
}
const circle2 = new Circle(1);
circle2.draw();

// ========================================



//constructor properties 
let x = {};  //let x = new Object();

new String(); //'', "", ``

new Boolean(); //true, false

new Number(); //1,2,3,...