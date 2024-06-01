//factory function
function createCircle(radius){
    return { 
    radius: radius,
    location: {
        x:1,
        y:2,
    },
    isVisible : true,
    draw(){
        console.log("drawing...");
    }
};
}
const circle = createCircle(1);
console.log(circle);
console.log(circle.draw());

const circle1 = createCircle(3);
console.log(circle1);
