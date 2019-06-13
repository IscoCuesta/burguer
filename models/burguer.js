var orm = require("../config/orm");

var burguers = {
    all: function(cb) {
      orm.all("burguers", function(res) {
        cb(res);
      });
    },
    // The variables cols and vals are arrays.
    create: function(cols, vals, cb) {
      orm.create("burguers", cols, vals, function(res) {
        cb(res);
      });
    },
    update: function(vals, cb) {
      orm.update("burguers", vals,  function(res) {
        cb(res);
      });
    }
  };
  
  // Export the database functions for the controller (catsController.js).
  module.exports = burguers;