let allFriends = require("../data/friends");


module.exports = function (app) {

    // API GET Requests
    app.get("/api/friends", function (req, res) {
        res.json(allFriends);
    });



    // API POST Requests

    app.post("/api/friends", function (req, res) {

        //code here to test compatibility with other people in the database

        //compare the newUser's scores against the 'allFriends' database
        // will need to have a for loop that loops through both adding the difference between the two scores to a variable and recording the total difference to a new array

        //compare the total difference in score between the newUser and allFriends and the closest in value will be their match


    });


};