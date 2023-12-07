var createError = require('http-errors');
var express = require('express');
var path = require('path');
var hike = require('./routes/hike');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');

var app = express();
app.use(express.json());

app.post('/api/converter', function (req, res) {
  //const { value, type } = req.body;
  const type = req.body.type;
  const value = req.body.value;
 
  var message = ""
  
  if(typeof value === 'number' && !isNaN(value))
  {
      switch(type)
      {
          case "foot2meter":
              var convertedValue = value/3.28084
              message = "Converted Value: "+convertedValue+" meter"
              break;
          case "meter2foot":
              var convertedValue = value*3.28084
              message = "Converted Value: "+convertedValue+" feet"
              break;
          case "kilo2lbs":
              var convertedValue = value*2.20462
              message = "Converted Value: "+convertedValue+" lbs"
              break;
          case "lbs2kilo":
              var convertedValue = value/2.20462
              message = "Converted Value: "+convertedValue+" kg"
              break;
          case "cel2fahr":
              var convertedValue = (value*9/5)+32
              message = "Converted Value: "+convertedValue+" F"
              break;
          case "fahr2cel":
              var convertedValue = (value-32)*5/9
              message = "Converted Value: "+convertedValue+" C"
              break;
          case "btc2cad":
              var convertedValue = value*40367.66
              message = "Converted Value: "+convertedValue+" CAD"
              break;
          case "cad2btc":
              var convertedValue = value/40367.66
              message = "Converted Value: "+convertedValue+" BTC"
              break;
          case "litre2gal":
              var convertedValue = value/3.78541
              message = "Converted Value: "+convertedValue+" gallons"
              break;
          case "gal2litre":
              var convertedValue = value*3.78541
              message = "Converted Value: "+convertedValue+" L"
              break;
          default:
              message = "Ce type n'est pas dans nos conversions."
              break;
      }

  }
  else
  {
      res.status(400).send("Invalid input.");
  }
  

  res.send(message);
});

app.get("/boomboomboomboom", async (req, res) =>{

  res.send("I want you in my room!");
});
app.get('/hikes', hike.index);
app.post('/add_hike', hike.add_hike);

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});


module.exports = app;
