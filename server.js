
var express = require('express');
var path = require('path');

var app = express();

app.set('port', (process.env.PORT || 5000));

app.use(express.static(path.join(__dirname, 'public')));

app.get('/', function(req, res){
  res.sendFile(path.join(__dirname, 'public/index.html'));
});

app.get('/', function(req, res){
  res.sendFile(path.join(__dirname, 'public/nt.html'));
});

app.get('/', function(req, res){
  res.sendFile(path.join(__dirname, 'public/404.html'));
});

var server = app.listen(app.get('port'), function(){
  console.log('Server listening on port 5000',app.get('port'));
});
