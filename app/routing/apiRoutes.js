let allFriends = require("../data/friends");


module.exports = function (app) {

    // API GET Requests
    app.get('/api/friends', function (req, res) {
        res.json(allFriends);
    });



    // API POST Requests

    app.post('/api/friends', function (req, res) {

        //pull in the data from the survey
        let newUserScores = req.body.scores;
        // console.log(newUserScores);
        //create an empty array to store the compared scores
        let compareScoresArray = [];

        //create a variable for the new friend match that is closest to or equal to 0
        let findBestFriend = 0;
        //console.log('i list length:' + allFriends.length);
        //loop through the user data
        for (let i = 0; i < allFriends.length; i++) {
            //console.log(allFriends[i]);
            //console.log('full List:' + JSON.stringify(allFriends));
            //create a variable to keep track of the sum of the differences between the user's score and the friend's database score
            let sumOfDiff = 0;
            //loop through the friends database scores
            //console.log('f list length:' + newUserScores.length);
            for (let f = 0; f < newUserScores.length; f++) {
                //console.log(allFriends[i].scores);
                // console.log(newUserScores[0]);
                //add the absolute value (Math.abs()) difference between the two scores to the sumOfDiff variable
                sumOfDiff = sumOfDiff + Math.abs(parseInt(allFriends[i].scores[f]) - parseInt(newUserScores[f]));
            }
            //console.log(sumOfDiff);
            //push the total sumOfDiff answers to the compareScoresArray
            compareScoresArray.push(sumOfDiff);
        }

        // console.log(compareScoresArray);

        //create another for loop to loop through the compareScoresArray to find the match that is closest to par or 0
        for (let i = 0; i < compareScoresArray.length; i++) {
            if (compareScoresArray[i] <= compareScoresArray[findBestFriend]) {
                findBestFriend = i;
            }
        }
        //return the new bestfriend
        let newBestFriend = allFriends[findBestFriend];
        res.json(newBestFriend);
        // console.log(newBestFriend);

        allFriends.push(req.body);




    });


};


