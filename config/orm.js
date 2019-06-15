// Import MySQL connection.
var connection = require("../config/connection.js");



// Object for all our SQL statement functions.
var orm = {
  all: function(tableInput, cb) {
    var queryString = "SELECT * FROM " + tableInput + ";";
    connection.query(queryString, function(err, result) {
      if (err) {
        throw err;
      }
      cb(result);
    });
  },
  create: function(table, vals, cb) {
    var queryString = "INSERT INTO " + table + " (name) VALUES (?);";

    console.log(queryString);
    console.log(vals)
    console.log(cb)

    connection.query(queryString, vals, function(err, result) {
      if (err) {
        throw err;
      }

      cb(result);
    });
  },
  update: function(table, vals, cb) {
    var queryString = "UPDATE " + table + " SET devoured = true WHERE id = "+ vals+" ;";

    console.log(queryString);
    connection.query(queryString, function(err, result) {
      if (err) {
        throw err;
      }

      cb(result);
    });
  }
};

module.exports = orm;
