//Load data
let friendsData = require('../data/friends.js');
let path = require('path');

//Routing

module.exports = function(app){

app.get('api/friends.js', function(req, res){
    res.json(friendsData);
});

}