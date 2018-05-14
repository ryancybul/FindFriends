//Load data
let friendsData = require('../data/friends.js');

//Routing

module.exports = function(app){

    //Gets the total list of friend entries
    app.get('/api/friends', function(req, res){
        console.log('this works');
        return res.json(friendsData);
    });

    app.post('/api/friends', function(req,res){
        //grabs the users info
        var user = req.body.scores;
        var scores = [];
        var friendCount = 0;
        var bestMatch = 0;

        //runs through the friendsArray
        for(var i=0; i<friendsData.length; i++){
            var scoresDiff = 0;
            //run through scores to compare friends
            for(var j=0; j < user.length; j++){
                scoresDiff += (Math.abs(parseInt(friendsData[i].scores[j]) - parseInt(user[j])));
            }
            //push results into scores
            scores.push(scoresDiff);
        }

        //after all friends are compared, find best match
        for(var i=0; i < scores.length; i++){
            if(scores[i] <= scores[bestMatch]){
                bestMatch = i;
            }
        }

        //returns the match
        var match = friendsData[bestMatch];
        res.json(match);

        //pushes new submission into the friendsData
        friendsData.push(req.body);
    });
};
}
