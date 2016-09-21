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

