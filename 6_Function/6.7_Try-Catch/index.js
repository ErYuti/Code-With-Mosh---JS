//Try and Catch 
const person = {
    firstName : 'yuti',
    lastName : 'meher',
    get fullName(){
        return `${person.firstName} ${person.lastName}`;
    },
    set fullName (value){
        if (typeof value !== 'string') 
            throw new Error('value is not a string.');

       const parts =  value.split(' ');
       if(parts.length !== 2)
        throw new Error('Enter a first and last name.')
       this.firstName = parts[0];
       this.lastName = parts[1];
    }
};
try{
    person.fullName = '';
}
catch(e){
    console.log(e);
}
console.log(person.fullName);
