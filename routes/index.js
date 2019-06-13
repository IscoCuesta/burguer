var express = require('express');
var router = express.Router();
var burguers = require("../models/burguer");

/* GET home page. */
router.get('/', function(req, res, next) {
  burguers.all(function(data) {
    var hbsObject = {
      burguers: data
    };
    console.log(hbsObject);
    res.render("index", hbsObject);
  });
});

module.exports = router;
