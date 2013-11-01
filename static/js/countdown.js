(function() {
    // set the date we're counting down to
    var target_date = new Date("Nov 2, 2013 10:00 am").getTime();
     
    // variables for time units
    var days, hours, minutes, seconds;
     
    // get tag element
    var countdown = document.getElementById("countdown");

    var pad = function(n) {
        return (n < 10) ? '0' + n : n;
    };
     
    // update the tag with id "countdown" every 1 second
    setInterval(function () {
        if (!countdown) {
            countdown = document.getElementById("countdown");
        }
        // find the amount of "seconds" between now and target
        var current_date = new Date().getTime();
        var seconds_left = (target_date - current_date) / 1000;
     
        // do some time calculations
        days = parseInt(seconds_left / 86400);
        seconds_left = seconds_left % 86400;
         
        hours = parseInt(seconds_left / 3600);
        seconds_left = seconds_left % 3600;
         
        minutes = parseInt(seconds_left / 60);
        seconds = parseInt(seconds_left % 60);

        // format countdown string + set tag value
        if (!countdown) {
            return;
        }

        var str = ((days) ? days + ' days, ' : '') + ((days || hours) ? hours + ' hours, ' : '')
            + ((minutes) ? pad(minutes) + ' minutes and ' : '') + ((seconds) ? pad(seconds) + ' seconds' : '');  
        
        if (str !== '') {
            str = 'Only ' + str + ' left until the hacking begins!';
        }
        countdown.innerHTML = str;
     
    }, 1000);

})();
