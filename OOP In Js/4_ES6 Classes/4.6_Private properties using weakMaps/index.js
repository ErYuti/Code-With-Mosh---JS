//private properties using weakMaps

const _button = new WeakMap();
const _tap = new WeakMap();

class Remote {
    constructor(button) {
        _button.set(this, button);

        _tap.set(this, () => {
            console.log('tap', this)
        });
    }

    press() {
        // console.log(_button.get(this));
        _tap.get(this)();

        console.log('taping...')
    }
}

const b = new Remote(1);
console.log(b);
console.log(b.press());





