//raw data to be plotted
function readData(callback) {
  var rawData = document.getElementById('data').innerHTML;
  var rows = d3.csvParse(rawData);
  callback(rows);
}


readData(function (rows) {

    var trace1 = {
      type: 'scatter',
      mode: 'lines',
      x: rows.map(function(row){
        return row['Time'];
      }),
      y: rows.map(function(row){
        return row['Stress'];
      }),
      line: {
        width: 2
      },
    };

    var trace2 = {
      type: 'scatter',
      mode: 'lines',
      x: rows.map(function(row){
        return row['Time'];
      }),
      y: rows.map(function(row){
        return row['Strain'];
      }),
      line: {
        width: 2
      },
    };

    var trace3 = {
      type: 'scatter',
      mode: 'lines',
      x: rows.map(function(row){
        return row['Strain'];
      }),
      y: rows.map(function(row){
        return row['Stress'];
      }),
      line: {
        width: 2
      },
    };

    var layout1 = {
      yaxis: {
        title: "Stress [MPa]",
        showline: true
      },
      xaxis: {
        title: "Time [h]",
        showline: true
      },
      margin: {
        l: 40, b: 60, r: 30, t: 20
      }
    };

    var layout2 = {
      yaxis: {
        title: "Strain",
        showline: true
      },
      xaxis: {
        title: "Time [h]",
        showline: true
      },
      margin: {
        l: 40, b: 60, r: 30, t: 20
      }
    };

    var layout3 = {
      yaxis: {
        title: "Stress [MPa]",
        showline: true
      },
      xaxis: {
        title: "Strain",
        showline: true
      },
      margin: {
        l: 40, b: 60, r: 30, t: 20
      }
    };

    Plotly.plot(document.getElementById('stressT'), [trace1], layout1, {showLink: false});
    Plotly.plot(document.getElementById('strainT'), [trace2], layout2, {showLink: false});
    Plotly.plot(document.getElementById('stressStrain'), [trace3], layout3, {showLink: false});

});
