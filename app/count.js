if (typeof define !== 'function') { var define = require('amdefine')(module); }

define(function () {
  return {
    count : function (start, end) {
      var count=start;

      var counter = setInterval(timer, 1000); //1000 will  run it every 1 second

      function timer()
          {
            count=count+1;
            if (count >= end)
            {
               clearInterval(counter);
               //counter ended, do something here
               return;
            } else {
                 console.log(count);
              }
             //Do code for showing the number of seconds here
            }
    }
  };
});
