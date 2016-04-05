var express = require('express');
var stormpath = require('express-stormpath');

var app = express();
app.use(stormpath.init(app, { website: true }));

app.on('stormpath.ready', function() {
  app.listen(process.env.PORT || 3000);
});


app.get('/home', stormpath.loginRequired, function(req, res) {
  res.send('You have reached the dashboard page! You must be logged in.');
});
