
//Abstraction

//Private Properties Using Symbols
//symbole produces unique value

const _button = Symbol();
const _press = Symbol();

class Remote {
    constructor(button) {
        // this.button = button;
        // this['button'] = button;
        this[_button] = button;

    }
    
    [_press](){

    }
}

const b = new Remote(1);

console.log(Object.getOwnPropertyNames(b));
console.log(Object.getOwnPropertySymbols(b));

console.log(b);



// ==================================================================

//private properties using weakMaps