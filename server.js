var express = require('express');
var app = express();
var port = process.env.PORT || 3600;

app.use(express.static(__dirname + '/public'));
app.listen(port);

// Go to tracking page.
app.get('/tracking', function(req, res) {
  res.sendFile(__dirname + '/public/tracking/tracking.html');
});

console.log(`App server running on  port: ${port}`);
