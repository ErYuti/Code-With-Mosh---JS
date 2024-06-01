//value vs Reference 
//value
let a = 10;
let b = a;
a=20;
console.log(a);
console.log(b);


// Reference  type  
let c ={value:10};
let d= c;
c.value = 20;
console.log(c);
console.log(d);
c = {value:20};
console.log(c);
console.log(d);


// =======================


//value with function
let number = 10;
function increase(number){
    number++;
}
increase(number);
console.log(number);

//Reference with function
let obj = 10;
function increase(obj){
    obj.value++;
}
increase(obj);
console.log(obj);