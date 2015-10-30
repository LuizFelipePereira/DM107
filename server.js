// Dependencies
var express = require ('express');
var bodyParser = require('body-parser');

// Express configuration
var app = express();
app.use(bodyParser.json());
app.use(express.static('public'));


//welcome
app.get('/', function(req,res) {
    res.redirect('./index.html');
    
});

app.use('/api/Deliverys', require('./app/DeliveryApi'));

var server = app.listen(8080 , function() {
    console.log('Server Running at http://localhost:8080');  
});