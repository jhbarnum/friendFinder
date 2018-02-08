const path = require('path');



var friendsArr = require(path.join(__dirname, '../data/friends.js'));

module.exports = function (app) {
//   * A GET route with the url`/api/friends`.
//    * This will be used to display a JSON of all possible friends.
    app.get("/api/friends", function (req, res) {
    //var chosen = req.params.friends;
        return res.json(friendsArr);
    });



//    * A POST routes`/api/friends`.
//    * This will be used to handle incoming survey results.
//    * This route will also be used to handle the compatibility logic.  
    app.post("/api/friends", function (req, res) {
    // req.body hosts is equal to the JSON post sent from the user
    // This works because of our body-parser middleware
        friendsArr.push(req.body);

    });
}