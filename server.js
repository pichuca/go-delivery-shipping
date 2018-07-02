var express = require('express');
var app = express();
var serveStatic = require('serve-static');
var port = process.env.PORT || 3600;

app.use(serveStatic('public', {'index': ['index.html', 'index.htm']}));
app.listen(port);

console.log('App server running on: ' + port);
