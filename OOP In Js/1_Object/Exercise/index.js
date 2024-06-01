function StopWatch (){
    let startT, endT, duration, run = 0 ;

    this.start = function (){
        if (run)
            throw new Error('StopWatch is already started');

        run = true;

        startT = new Date();
    };

    this.stop = function (){
       if(!run)
        throw new Error('StopWatch not started');
    
       run = false;
       endT = new Date();

       const sec = (endT.getTime() - startT.getTime())/ 1000;
       duration += sec;
    };

    this.reset = function (){
        startT = null;
        endT = null;
        run = false;
        duration = 0;
    };

    Object.defineProperty(this, 'duration', {
        get: function(){
            return duration;
        }
    });
    }
const stopWatch =  new StopWatch();