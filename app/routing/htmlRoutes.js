

const path = require('path');
console.log('html route connected')


 function htmlRouteExport(app) {
     


     //app.use(express.static('./app/public'));

//     // *A default, catch-all route that leads to`home.html`
//     //     *  which displays the home page. 
    app.use('/', function(req, res) {
        res.sendFile(path.join(__dirname, '../public/home.html'));
        console.log('routing')
     });


//     //* A GET Route to`/survey` which should display the survey page.
    app.get('/survey', function (req, res) {
        res.sendFile(path.join(__dirname, '../public/survey.html'));
        console.log('routing')
    });


 }
       module.exports = htmlRouteExport;
   