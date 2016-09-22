var data = {
  series: [63, 37]
};

var sum = function(a, b) { return a + b };

new Chartist.Pie('#chart1', data, {
  labelInterpolationFnc: function(value) {
    return Math.round(value / data.series.reduce(sum) * 100) + '%';
  }
});

new Chartist.Bar('#chart2', {
  labels: ['13-17', '18-29', '30-50', '50+',],
  series: [
    [22, 46, 25, 6,],
    
  ]
}, {
  seriesBarDistance: 100,
  reverseData: true,
  horizontalBars: true,
  axisY: {
  offset: 60
  }
});

var data = {
  series: [20, 45, 35]
};

var sum = function(a, b) { return a + b };

new Chartist.Pie('#chart3', data, {
  labelInterpolationFnc: function(value) {
    return Math.round(value / data.series.reduce(sum) * 100) + '%';
  }
});

var counter = 0;
window.setInterval(
function () {
    counter = counter + 1;
    document.getElementById("counter").innerHTML = counter;
}, 1000);







var count = 0;
    (function(){
    // do some stuff
    count = count +45;
    $(".page-content").html(count);

    if (count == 3846154) return;
    

    setTimeout(arguments.callee, 1000);
})();


    (function(){
    // do some stuff
    if (count == 3846154) return;
    count = count -1;
    $(".page-content").html(count);

    
    

    setTimeout(arguments.callee, 200);
})();

var count2 = 0;
    (function(){
    // do some stuff
    count2 = count2 +18;
    $(".page-content2").html(count2);

    if (count2 == 1511236) return;
    

    setTimeout(arguments.callee, 1000);
})();


    (function(){
    // do some stuff
    if (count2 == 1511236) return;
    count2 = count2 -1;
    $(".page-content2").html(count2);

    
    

    setTimeout(arguments.callee, 150);
})();



function updateTimer(deadline){
  var time = deadline - new Date();
  return {
    'days': Math.floor( time/(1000*60*60*24) ),
    'hours': Math.floor( (time/(1000*60*60)) % 24 ),
    'minutes': Math.floor( (time/1000/60) % 60 ),
    'seconds': Math.floor( (time/1000) % 60 ),
    'total' : time
  };
}


function animateClock(span){
  span.className = "turn";
  setTimeout(function(){
    span.className = "";
  },700);
}


function startTimer(id, deadline){
  var timerInterval = setInterval(function(){
    var clock = document.getElementById(id);
    var timer = updateTimer(deadline);

clock.innerHTML = '<span>' + timer.days + '</span>'
                    + '<span>' + timer.hours + '</span>'
                    + '<span>' + timer.minutes + '</span>'
                    + '<span>' + timer.seconds + '</span>';


//animations
    var spans = clock.getElementsByTagName("span");
    animateClock(spans[3]);
    if(timer.seconds == 59) animateClock(spans[2]);
    if(timer.minutes == 59 && timer.seconds == 59) animateClock(spans[1]);
    if(timer.hours == 23 && timer.minutes == 59 && timer.seconds == 59) animateClock(spans[0]);


 //check for end of timer
if(timer.total < 1){
      clearInterval(timerInterval);
      clock.innerHTML = '<span>0</span><span>0</span><span>0</span><span>0</span>';
    }



}, 1000);
    }



window.onload = function(){
  var deadline = new Date("November 21, 2021 14:15:00");
  startTimer ("clock", deadline);
};

