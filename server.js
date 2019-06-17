
var express = require('express');
var path = require('path');

var indexRouter = require('./routes/index');
var apiRouter = require('./routes/users');

var app = express();

// Serve static content for the app from the "public" directory in the application directory.
app.use(express.static("public"));

// Parse application body
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// view engine setup
// app.set('views', path.join(__dirname, 'views'));


var exphbs = require("express-handlebars");

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");


var PORT = process.env.PORT || 8080;

app.use('/', indexRouter);
app.use('/api', apiRouter);



// // error handler
// app.use(function(err, req, res, next) {
//   // set locals, only providing error in development
//   res.locals.message = err.message;
//   res.locals.error = req.app.get('env') === 'development' ? err : {};

//   // render the error page
//   res.json(err.status || 500);
// });

app.listen(PORT, function() {
  // Log (server-side) when our server has started
  console.log("Server listening on: http://localhost:" + PORT);
});

module.exports = app;
