const express = require('express');
const app = express();
const http = require('http');
const server = http.createServer(app);
const path = require('path');
const say = require('say');
const bodyParser = require('body-parser');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded());

app.get('/', function(req, res){
    res.sendFile(path.join(__dirname + '/index.html'));
});

app.post('/fuckme', function(req, res) {
      console.log(req.body);
      res.redirect('/');
      sayTxt(req.body.text);

});

function sayTxt(txt){
    say.speak(txt, 1.0, (err) => {
        if (err) {
          return console.error(err);
        }
      
        console.log('Text has been spoken.');
      });
}

server.listen(3000);