var express=require('express');
var app=express();
var path=require('path');
var calculate=require('./modules/calc');
var bodyParser=require('body-parser');
var urlencodedParser = bodyParser.urlencoded( { extended: false } );

app.use(express.static('public'));
//set up server
var server = app.listen(process.env.PORT || 3000, function () {
console.log("listening on port 3000");
});

//set up basic url
app.get( '/', function( req, res ){
  console.log( 'Bionic Bird is Alive' );

  res.write( "Bionic Bird Chirps it's Dominance" );

  res.end();
});

app.get('/calc',function (req, res) {
  console.log("Bird thinks about Calc");
  res.write("Bionic Bird is Calculating your DEMISE");
  res.end();
});

app.get('/index', function (req, res) {
  res.sendFile( path.resolve( 'public/index.html' ) );
});
app.post('/pathpost', urlencodedParser, function (req, res) {

  res.write(calculate(req.body.inputX ,req.body.inputY, req.body.operation));
  res.end();
});
//req.query.inputX,req.query.inputY, req.query.operation
