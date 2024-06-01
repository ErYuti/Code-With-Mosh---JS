//Address Object
//showAddress(adress) => street, city, zipCode
const address = {
    street: 'Wadari-mahim',
    city: 'palghar',
    zipCode : 401402,
};

function showAddress (address){
    for(let key in address){
        console.log(key, ':', address[key]);
    }
}
console.log('Address Object using simple function: ');
showAddress(address);




// =============================================
// Factory and Construtor function for above example

//factory function
function createAddress(street, city, zipCode){
    return {
       street, // street : street,
       city, // city: city,
       zipCode // zipCode : zipCode
    };
}
console.log('Address Object using factory method: ')
const myaddress = createAddress('wadrai','palghar',401402);
console.log(myaddress);

// -----------------------------------------------------------------

// construtor function 
function Address(street, city, zipCode) {
        this.street = street;
        this.city = city;
        this.zipCode = zipCode;
}
console.log('Address Object using construtor method: ');
const newaddress = new Address('wadrai','palghar',401402);
console.log(newaddress);



// =============================================
// Construtor function for above example check equality, same object or not
const address1 = new Address('wadrai','palghar',401402);
const address2 = new Address('wadrai','palghar',401402);
const address3 = address2;

function areEqual(address1, address2) {
    return address1.street === address2.street &&
    address1.city === address2.city && 
    address1.zipCode === address2.zipCode;
}
console.log('Two variable with indivial properties vaue are referencing the same object value are not? :');
console.log(areEqual(address1, address2));

// ------------------------

function areSame(address1, address2) {
   return address1 === address2;
}
console.log('Two variable are referencing the same object are not? :');
console.log(areSame(address1,address2));
console.log(areSame(address2, address3));




// ========================================================
//Blog post are created for posting the post
//title, body, author, views, comments -(author, body), isLive
let post = {
    title : 'Kaira wedding',
    body :  `This is kartik and naira, kaira's wedding`,
    author: 'Yuti Meher',
    views : 100,
    comment : [
        { author : 'Jaee meher', body: 'amazing wedding'},
        { author : 'deep', body: 'wowww!'},
    ],
    isLive : true
};
console.log('Post Object are created : ');
console.log(post);



// ===========================================================
//Blog post are created for drafting the post - not publish is yet
function Post(title, body, author){
    this.title = title;
    this.body = body;
    this.author = author;
    this.views = 0;
    this.comment = [];
    this.isLive = false;
}
console.log('Draft Post Object are: ')
const posting = new Post('Travel','Manali Picnic in winter', 'deepika');
console.log(posting);



// ==================================================================
let priceRanges = [
    {label:'$', tooltip:'Inexpensive', minPrice: 100, maxPrice: 1000},
    {label:'$$', tooltip:'moderate', minPrice: 1000, maxPrice: 5000},
    {label:'$$$', tooltip:'Higher', minPrice: 5000, maxPrice: 10000},
    {label:'$$$$', tooltip:'Unltra Higher', minPrice: 10000, maxPrice: 100000},
];
