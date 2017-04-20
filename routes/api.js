  const express = require('express');
  const router = express.Router();
  const fs = require('fs');
  const bodyParser = require('body-parser');

  const jsonParser = bodyParser.json()

  router.post('/data' , function (req, res, next){
    var filePath = 'models\\' + req.body.dataFile;
    var graphType = req.body.selection;

    function checkData (callback) {
      fs.readFile(filePath, 'utf8', function (err, data) {
        if (err) {
          data = req.body.data
          callback(data)
        } else {
          callback(data)
        }
      })
    };

    checkData(function (data) {
      switch(graphType) {
          case 'Stress-Strain-Time':
              res.render('data', {Data: data});
              break;
          case 'Other':
              res.send('Other graphs not defined yet!')
              break;
          default:
              res.render('data', {Data: data});
      };
    });
  });


module.exports = router;
