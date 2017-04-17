const express = require('express');
const router = express.Router();
const fs = require('fs');

/* GET home page. */
router.get('/', function(req, res, next) {
  fs.readFile('./views/index.html', function(err, data){
  res.write(data);
  res.end();
  });
});

module.exports = router;
