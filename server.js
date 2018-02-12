const mysql = require('mysql');
const express = require('express');
const path = require('path');
const apiRouteExport = require('./app/routing/apiRoutes.js');
const htmlRoutesExport = require('./app/routing/htmlRoutes.js');
var bodyParser = require('body-parser')
const app = express();
const PORT = process.env.PORT || 3000;
//app.use(express.static('public'))
//const surveyRoutes = require('./app/routing/apiRoutes.js')
//app.use('/FriendFinder', express.static(__dirname + '/FriendFinder/app/public/home.html'));
 
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());


app.use(express.static('./app/public'));


// app.use('/', function(req, res) {  
//     res.sendFile(path.join(__dirname, '/app/public/home.html'));   
// });


// app.get('/survey', function (req, res) {    
//     res.sendFile(path.join(__dirname, '/app/public/survey.html'));
//     console.log(friends.name)
// });
//require(__dirname, './app/routing/htmlRoutes')
// require(path.join(__dirname, './app/routing/apiRoutes.js'));
// require(path.join(__dirname, './app/routing/htmlRoutes.js'));

//var htmlRouteExport = require("./app/routing/htmlRoutes.js");
apiRouteExport(app); 
htmlRoutesExport(app);
app.listen(PORT, function (){
    //console.log(htmlRouteExport);
    console.log('listening on port 3000')
});