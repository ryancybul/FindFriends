//Dependencies
let express = require('express');
let bodyParser = require('body-parser');
let path = require('path');

//Express server config. 
let app = express();
let PORT = process.env.PORT || 3000;

// Sets up the Express app to handle data parsing
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

//Routing files
require('./app/routing/apiRoutes.js');
require('./app/routing/htmlRoutes');

//Listener
app.listen(PORT, function() {
    console.log(`App listening on PORT: ${PORT}`);
});