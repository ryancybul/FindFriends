//Dependicies
//We include the path package to get the correct file path for our html
var path = require("path");

//HTML Routing
module.exports = function(app) {
    app.get("/survey", function(req, res) {
        res.sendFile(path.join(__dirname + "./../public/survey.html"));
    });

    // If no matching route is found default to home
    app.use(function(req, res) {
        res.sendFile(path.join(__dirname + "./../public/home.html"));
    });
};