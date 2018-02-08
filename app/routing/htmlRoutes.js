const path = require('path');

app.use(express.static('./app/public'));
app.use('/', function(req, res) {
    //console.log(path.join(__dirname, './app/public/survey.html'));
    res.sendFile(path.join(__dirname, '/app/public/home.html'));
    console.log('routing')
});


app.get('/survey', function (req, res) {
    res.sendFile(path.join(__dirname, '/app/public/survey.html'));
    console.log('routing')
});
