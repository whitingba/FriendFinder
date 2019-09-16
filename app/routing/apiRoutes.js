let allFriends = require("../data/friends");


module.exports = function (app) {

    // API GET Requests
    app.get("/api/friends", function (req, res) {
        res.json(allFriends);
    });



    // API POST Requests

    app.post("/api/friends", function (req, res) {
        //console.log(req.body);
        //pull in the data from the survey
        let newUserScores = req.body.scores;
        //create an empty array to store the compared scores
        let compareScoresArray = [];
        //create a variable for the new friend match
        let bestFriend = 0;


        //loop through the user data

        //loop through the database answeres
        //compare the newUser's scores against the 'allFriends' database
        //while storing/keeping track of the compared answers

        //compare the total difference in score between the newUser and allFriends and the closest in value will be their match


    });


};