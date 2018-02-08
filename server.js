const mysql = require('mysql');
const express = require('express');
const path = require('path');

var bodyParser = require('body-parser')
const app = express();


//const surveyRoutes = require('./app/routing/apiRoutes.js')
//app.use('/FriendFinder', express.static(__dirname + '/FriendFinder/app/public/home.html'));
 
app.use(bodyParser.urlencoded({ extended: false }));
// app.use(bodyParser.json());


app.use(express.static('./app/public'));


app.use('/', function(req, res) {  
    res.sendFile(path.join(__dirname, '/app/public/home.html'));   
});


app.get('/survey', function (req, res) {    
    res.sendFile(path.join(__dirname, '/app/public/survey.html'));
    console.log(friends.name)
});

// require(path.join(__dirname, './app/routing/apiRoutes'))(app);
// require(path.join(__dirname, './app/routing/htmlRoutes'))(app);


app.listen(3000, function (){
    console.log('listening on port 3000')
});