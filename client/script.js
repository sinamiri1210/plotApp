var $ = require('jquery');

jQuery(document).ready(function($){

  $(document).on('click', '.browse', function(){
    var file = $(this).parent().parent().parent().find('.file');
    file.trigger('click');
  });

  $(document).on('change', '.file', function(){
    $(this).parent().find('.form-control').val($(this).val().replace(/C:\\fakepath\\/i, 'models\\'));
  });

});


//plot placeholder
var PLOT = document.getElementById('plot');
//raw data to be plotted
function readData(callback) {
  var rawData = document.getElementById('data').innerHTML;
  var rows = d3.csvParse(rawData);
  callback(rows);
}

readData(function (rows) {

    var trace = {
      type: 'scatter',                    // set the chart type
      mode: 'lines',                      // connect points with lines
      x: rows.map(function(row){          // set the x-data
        return row['Strain'];
      }),
      y: rows.map(function(row){          // set the y-data
        return row['Stress'];
      }),
      line: {                             // set the width of the line.
        width: 1
      },
    };

    var layout = {
      yaxis: {
        title: "Stress",
        showline: true
      },
      xaxis: {
        title: "Strain",
        showline: true
      },
      margin: {                           // update the left, bottom, right, top margin
        l: 40, b: 60, r: 30, t: 20
      }
    };

    Plotly.plot(PLOT, [trace], layout, {showLink: false});

});
