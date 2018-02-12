const path = require('path');
const friendsArr = require(path.join(__dirname, '../data/friends.js'));
console.log('api route connected')
console.log(friendsArr);



function apiRouteExport(app) {
//    * This will be used to display a JSON of all possible friends.
    app.get("/api/friends", function (req, res) {
        return res.json(friendsArr);
        console.log("get");
    });



//    * A POST routes`/api/friends`.
//    * This will be used to handle incoming survey results.
//    * This route will also be used to handle the compatibility logic.  
    app.post("/api/friends.js", function (req, res) {
    // req.body hosts is equal to the JSON post sent from the user
    // This works because of our body-parser middleware
        friendsArr.push(req.body);
        console.log("post");
        res.json(friendsArr);
    });
}
module.exports = apiRouteExport;