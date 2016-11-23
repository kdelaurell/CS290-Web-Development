var express = require('express');
var app = express();
var handlebars = require('express-handlebars').create({defaultLayout:'main'});
var bodyParser = require('body-parser');
var mySQL = require('mysql');
var path = require('path');
var pool = mySQL.createPool({
  host  : 'localhost',
  user  : 'student',
  password: 'default',
  database: 'student'
})

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.engine('handlebars', handlebars.engine);
app.set('view engine', 'handlebars');
app.set('port', 3001);
app.use(express.static('public'));
app.use(express.static(path.join(__dirname, 'public')));



app.post('/insert', function(req, res, next){
  var context = {};
  pool.query("INSERT INTO workouts SET name = ?, reps = ?, weight = ?, date = ?, lbs = ? ", [req.body.names, req.body.reps, req.body.weight, req.body.date, req.body.lbs], function(err, result){
    if(err){
      next(err);
      return;
    }
    var resNum = result.insertId;
    pool.query('SELECT * FROM workouts WHERE id = ?', resNum, function(err, rows, fields){
        if(err){
          next(err);
          return;
        }
        context.results = JSON.stringify(rows);
        res.type('json');
        res.send(context.results);
    });
  });
});

app.post('/update',function(req,res,next){
  var context = {};
  pool.query("UPDATE workouts SET name=?, reps=?, weight=?, date=?, lbs=? WHERE id=? ",
    [req.body.names, req.body.reps, req.body.weight, req.body.date, req.body.lbs, req.body.id],
    function(err, result){
    if(err){
      next(err);
      return;
    }
    context.results = "Updated " + result.changedRows + " rows.";
    res.send(context.results);
  });
})

app.post('/delete', function(req, res, next){
  var context = {};
  pool.query('DELETE FROM workouts WHERE id = ?', req.body.id, function (err, result) {
  if (err) throw err;
  console.log('deleted ' + result.affectedRows + ' rows');
  });
  res.type('text/plain');
  res.send("success");
});

app.get('/reset-table',function(req,res,next){
  var context = {};
    pool.query("DROP TABLE IF EXISTS workouts", function(err){ //replace your connection pool with the your variable containing the connection pool
    var createString = "CREATE TABLE workouts("+
    "id INT PRIMARY KEY AUTO_INCREMENT,"+
    "name VARCHAR(255) NOT NULL,"+
    "reps INT,"+
    "weight INT,"+
    "date DATE,"+
    "lbs BOOLEAN)";
    pool.query(createString, function(err){
      res.render('home', context);
    })
  });
});

app.get('/displayTable',function(req,res,next){
  var context = {};
  pool.query('SELECT * FROM workouts', function(err, rows, fields){
    if(err){
      next(err);
      return;
    }
    context.results = JSON.stringify(rows);
    console.log(rows[0].date);
    res.type('json');
    res.send(context.results);
  });
});

app.get('/FinalProject',function(req,res,next){
  var context = {};
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
