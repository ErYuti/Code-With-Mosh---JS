//this keyword
//the object that is execuing the current function 

//function => global ( window, global)
const video = {
    title: 'a',
    play(){
        console.log(this);
    }
};
//regular function => global object
video.stop = function (){
    console.log(this);
};
video.play();
video.stop();


//method => obj
//function new keyword - construtor function = new { }
function Video(title){
    this.title = title;
    console.log(this);
}

const v = new Video ('b');





// ========================================

const playVedio = {
    title :'a',
    tags : ['a', 'b', 'c'],
    showTags(){

        //global object = window

        // this.tags.forEach(function(tag){
        //     console.log(this, tag); 
        // })

        //refer vedio object not a global object bcz forEach method
         this.tags.forEach(function(tag){
            console.log(this.title, tag); 
        }, this)


    }
}
playVedio.showTags();




// ================================================

// 1st solution
//changing the value of "this"
//to slove the above problem
//but not the better way to used
const Vedio1 = {
    title :'a',
    tags : ['a', 'b', 'c'],
    showTags(){
        const self = this;
         this.tags.forEach(function(tag){
            console.log(self.title, tag); 
        });
    }
}
Vedio1.showTags();

// ------------------------------
// this is the better way 
function playingVideo(a, b) {
    console.log(this);
}


// method 
playingVideo.call({ name : 'yuti'}, 1, 2);
playingVideo.apply({ name : 'yuti'}, [1, 2]);
playingVideo.bind({name : 'yuti'})();


playingVideo()

// ------------------------------
//2nd solution
const playVedio1 = {
    title :'a',
    tags : ['a', 'b', 'c'],
    showTags(){
         this.tags.forEach(function(tag){
            console.log(this.title, tag); 
        }.bind(this));
    }
}
playVedio1.showTags();


// ==================================
//3rd solution best solution
// but arrow is best way
const playVedio2 = {
    title :'a',
    tags : ['a', 'b', 'c'],
    showTags(){
         this.tags.forEach( tag =>{
            console.log(this.title, tag); 
        });
    }
}
playVedio2.showTags();

