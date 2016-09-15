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