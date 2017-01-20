var express = require ('express');
var path = require ('path');
var bodyParser = require ('body-parser');
var bio = require('./bios.json');
var app = express();
var nolan = 0;
var rukia = 0;
var charlie = 0;

app.use(express.static('public'));

app.use(bodyParser.urlencoded({extended:true}));

app.get('/', function (req, res){
  res.sendFile(path.join (__dirname, 'public/views/index.html'));
});

app.get('/bio', function (req, res) {
  res.send(bio);
});
app.post('/bio', function (req, res){
  console.log('req.body', Object.keys(req.body)[0]);
  var person =  Object.keys(req.body)[0];
    if (person == 'Nolan'){
      console.log("test");
      nolan++;
      res.sendStatus(200);
    }else if (person == 'Rukia') {
      rukia++;
      res.sendStatus(200);
    }else if (person == 'Charlie') {
      charlie++;
      res.sendStatus(200);
    }
})

app.get('/likes', function (req, res){
  var likeInfo = {};
  likeInfo.nolan = nolan;
  likeInfo.charlie = charlie;
  likeInfo.rukia = rukia;
  res.send(likeInfo);

});
app.listen(3000);
