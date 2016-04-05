var express = require('express');
var stormpath = require('express-stormpath');
// var routes = require('./routes/index');
var routes = require('./routes/restaurants');

// app.use('/', require('./routes/index'));
// app.use('/restaurants', require('./routes/restaurants'));

var app = express();
app.use(stormpath.init(app, { website: true }));

app.on('stormpath.ready', function() {
  app.listen(process.env.PORT || 3000);
});


app.get('/', stormpath.loginRequired, function(req, res) {
  res.send('You have reached the dashboard page! You must be logged in.');
});
