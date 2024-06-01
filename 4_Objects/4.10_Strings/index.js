//strings primitive
const message = '  This is my first message i print ';
console.log(message);
console.log(typeof message);
console.log(message.length);
console.log(message[0]);

//methods
console.log(message.includes('my'));
console.log(message.includes('this'));

console.log(message.startsWith('This'));
console.log(message.startsWith('this'));

console.log(message.endsWith('e'));

console.log(message.indexOf('my'));

console.log(message.replace('first','second'));

console.log(message.toUpperCase());
console.log(message.toLowerCase());

console.log(message.trim());

//escape characters- notation
const msg = 'Its\'s yuti here';
console.log(msg);

const msg2 = 'This is \n next line';
console.log(msg2);

console.log(msg2.split(' '));

//string object
const newString = new String('hi');
console.log(newString);
console.log(typeof newString);

