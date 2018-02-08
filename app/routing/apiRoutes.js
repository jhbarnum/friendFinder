const path = require('path');

app.get('/', function (req, res) {
    res.sendFile(path.join(__dirname, './app/public/home.html'));
    console.log('routing')
});
