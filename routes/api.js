  const express = require('express');
  const router = express.Router();
  const fs = require('fs');
  const bodyParser = require('body-parser');

  const jsonParser = bodyParser.json()

  router.post('/data' , function (req, res, next){
    var filePath = 'models\\' + req.body.dataFile;

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
        res.render('data', {Data: data});
    });
  });


module.exports = router;
