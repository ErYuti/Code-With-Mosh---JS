//private properties using weakMaps

const _button = new WeakMap();

class Remote {
    constructor(button) {
        _button.set(this, button);
    }

    get button() {
       return  _button.get(this);
    }

    set button(value) {
        if (value <= 0) throw new Error ('Invalid button');
        _button.set(this, value);
    }
}

const b = new Remote(1);
console.log(b);

console.log(b.button);

console.log(b.button = 10);
console.log(b.button);

console.log(b.button = -1);
console.log(b.button);





