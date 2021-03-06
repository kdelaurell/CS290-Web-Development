var express = require('express');

var app = express();
var handlebars = require('express-handlebars').create({defaultLayout:'main'});
var bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.engine('handlebars', handlebars.engine);
app.set('view engine', 'handlebars');
app.set('port', 3000);
//app.use(express.static('public'));

app.get('/getANDpostTEST', function(req, res){
  var context = {};
  var queryInfo = [];
  context.method = req.method;
  for(var p in req.query){
    queryInfo.push({'name' : p, 'body' : req.query[p]})
  }
  context.queryInfo = queryInfo;
  res.render('home', context);
});

app.post('/getANDpostTEST', function(req, res){
  var context = {};
  var queryInfo = [];
  context.method = req.method;
  for(var p in req.body){
    queryInfo.push({'name' : p, 'body' : req.body[p]})
  }
  context.queryInfo = queryInfo;
  res.render('home', context);
});

app.use(function(req,res){
  res.status(404);
  res.render('404');
});

app.use(function(err, req, res, next){
  console.error(err.stack);
  res.type('plain/text');
  res.status(500);
  res.render('500');
});

app.listen(app.get('port'), function(){
  console.log('Express started on http://localhost:' + app.get('port') + '; press Ctrl-C to terminate.');
});
