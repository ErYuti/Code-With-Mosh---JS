//static method

class Draw {
    constructor(radius) {
        this.radius = radius;
        this.move = function() {}
    }

    //Instance Method
    draw() {
        console.log('draw..');
    }

    //static method
    static parse(str) {
        const radius = JSON.parse(str).radius;
        return new Draw(radius);
    }

}

const draw = Draw.parse('{ "radius" : 1 }')
console.log(draw);



