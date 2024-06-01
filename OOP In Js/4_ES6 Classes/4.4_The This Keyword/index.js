
//The This Keyword

'use strict';

const Computer =  function() {
    this.press = function() {
        console.log(this);
    }
}

const comp = new Computer();
//Method call
comp.press();

const press = comp.press;
console.log(press);

//Function call
press();

