var express = require('express');
var router = express.Router();
var burguers = require("../models/burguer");

/* GET users listing. */
router.post('/burguers', function(req, res) {
  console.log("users request %s", req)
  burguers.create("burguers", req.body.name, function(result) {

    res.json({ id: result.insertId });
  });
});

router.put("/burguers/:id", function(req, res) {
  var id = req.params.id;
  console.log("putting burguer")


  burguers.update( id, function(result) {
    console.log(result.changedRows)
    if (result.changedRows == 0) {
      console.log("changed rows 0")
      // If no rows were changed, then the ID must not exist, so 404
      return res.status(404).end();
    } else {
      console.log("changed rows 1")
      res.status(200).json({});
    }
  });
});


module.exports = router;
