const person = {
    firstName : 'yuti',
    lastName : 'meher',
    fullName(){
        return `${person.firstName} ${person.lastName}`;
    }
};
person.fullName = 'jaee meher'
console.log(person.fullName());


// ----------------------------------
//getters => access properties
//setters => change (mutate) properties
const person = {
    firstName : 'yuti',
    lastName : 'meher',
    get fullName(){
        return `${person.firstName} ${person.lastName}`;
    },
    set fullName (value){
       const parts =  value.split(' ');
       this.firstName = parts[0];
       this.lastName = parts[1];
    }
};
person.fullName = 'jaee meher'
console.log(person.fullName);
console.log(person);