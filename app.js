const express = require('express');
const app = express();

app.use(express.static('public'));

app.set("views", "views");
app.set("view engine", "ejs");

const data = require('./data/info.json');

app.get('/', function(req, res){
  res.render('homepagebody', {

  });
});

app.get('/contact', function(req, res){
  res.render('contact', {

  });
});

app.get('/openingsuren', function(req, res){
  res.render('openingsuren', {

  });
});




app.get("/tentoonstelling1", function(request, response){  response.render("tentoonstelling1", {
  infos: data.informatie
});
});

// detailpagina van een blogbericht
app.get('/tentoonstelling1/:postid', function(req,res){
  res.render('detail', {
    info: data.informatie[req.params.postid]
  });
});

app.set('port', (process.env.PORT || 5000));
app.listen(app.get('port'));
