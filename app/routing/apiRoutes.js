var newFriends = require("../data/friends")


module.exports = function (app) {

    // API GET Requests
    app.get("/api/friends", function (req, res) {
        res.json(friends);
    });



    // API POST Requests

    app.post("/api/friends", function (req, res) {

        //code here to test compatibility with other people in the database


    });


};