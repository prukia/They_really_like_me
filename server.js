var express = require ('express');
var path = require ('path');
var bodyParser = require ('body-parser');
var bio = require('./bios.json');
var app = express();
app.use(express.static('public'));

app.use(bodyParser.urlencoded({extended:true}));

app.get('/', function (req, res){
  res.sendFile(path.join (__dirname, 'public/views/index.html'));
});

app.get('/bio', function (req, res) {
  res.send(bio);
});
app.post('/bio', function (req,res){
  console.log('req.body', req.body);


})
app.listen(3000);


// function likeCounter() {
//   if (person == 'nolan'){
//     nolan++;
//   }else if (person == 'rukia') {
//     rukia++;
//   }else if (person == 'charlie') {
//     charlie++;
//   }
//
//   }
// }
