var express = require('express');
var router = express.Router();
var burguers = require("../models/burguer");

/* GET users listing. */
router.post('/burguers', function(req, res, next) {
  burguers.create([
    "name"
  ], [
    req.body.name
  ], function(result) {

    res.json({ id: result.insertId });
  });
});

router.put("/burguers/:id", function(req, res) {
  var id = req.params.id;


  burguers.update( id, function(result) {
    if (result.changedRows == 0) {
      // If no rows were changed, then the ID must not exist, so 404
      return res.status(404).end();
    } else {
      res.status(200).redirect("/");
    }
  });
});


module.exports = router;
