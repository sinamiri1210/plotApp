//raw data to be plotted
function readData(callback) {
  var rawData = document.getElementById('data').innerHTML;
  var rows = d3.csvParse(rawData);
  callback(rows);
}


readData(function (rows) {

  var data = {

        mode: 'markers',
        x: rows.map(function(row){
          return row['X'];
        }),
        y: rows.map(function(row){
          return row['Y'];
        }),
        marker: {
            sizemode: 'area'
        }
  };

  var layout = {
    xaxis: {title: 'X'},
    yaxis: {title: 'Y', type: 'log'},
    margin: {
      l: 40, b: 60, r: 30, t: 20
    }
  };

  Plotly.plot(document.getElementById('scatter'), [data], layout, {showLink: false});

});
