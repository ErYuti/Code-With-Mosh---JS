//object literal method
const circle = {
    radius: 1,//key:value -properties
    location: {
        x:1,
        y:2,
    },
    isVisible : true,
    draw: function(){
        console.log("drawing...");
    },
    move: function(){
        console.log("moving...");
    },
};

circle.draw();//method
circle.move();