function StopWatch (){
    let startT, endT, duration, run = 0 ;

    Object.defineProperty(this, 'duration', {
        get: function(){
            return duration;
        },
        set: function(value){
            duration = value;
        }
    });

    Object.defineProperty(this, 'startT', {
        get: function(){
            return startT;
        }
    });

    Object.defineProperty(this, 'endT', {
        get: function(){
            return endT;
        }
    });

    Object.defineProperty(this, 'run', {
        get: function(){
            return run;
        }
    });
}

    StopWatch.prototype.start = function (){
        if (this.run)
            throw new Error('StopWatch is already started');

        this.run = true;

        this.startT = new Date();
    };

    StopWatch.prototype.stop = function (){
       if(!this.run)
        throw new Error('StopWatch not started');
    
       this.run = false;
       this.endT = new Date();

       const sec = (endT.getTime() - startT.getTime())/ 1000;
       this.duration += sec;
    };

    StopWatch.prototype.reset = function (){
        this.startT = null;
        this.endT = null;
        this.run = false;
        this.duration = 0;
    };


const stopWatch =  new StopWatch();
stopWatch.duration = 10;