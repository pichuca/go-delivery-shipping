var express = require('express');
var app = express();
var port = process.env.PORT || 3600;

app.use(express.static(__dirname + '/public'));
app.listen(port);

console.log(`App server running on port: ${port}`);
