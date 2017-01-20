var express = require ('express');
var path = require ('path');
var bodyParser = require ('body-parser');
var bio = require('./bios.json');
var app = express();

var nolan = 0;
var rukia = 0;
var charlie =0;
var person = 0;
app.use(express.static('public'));

app.use(bodyParser.urlencoded({extended:true}));

app.get('/', function (req, res){
  res.sendFile(path.join (__dirname, 'public/views/index.html'));
});

app.get('/bio', function (req, res) {
  res.send(bio);
});

app.post('/likes', function (req,res){
  console.log('req.body', req.body);
  function likeCounter() {
    if (person == 'nolan'){
      nolan++;
      res.sendStatus(200);
    }else if (person == 'rukia') {
      rukia++;
      res.sendStatus(200);
    }else if (person == 'charlie') {
      charlie++;
      res.sendStatus(200);
    }

    }


})
app.listen(3000);
