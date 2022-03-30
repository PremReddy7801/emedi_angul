var express = require('express');
var path = require('path');

var app = express();

app.use(express.static(__dirname + '/EmediApplication'));

app.get('/*', function(req,res) {
    
res.sendFile(path.join(__dirname+'/EmediApplication/index.html'));
});

app.listen(process.env.PORT || 3000, function(){
    console.log("Express server listening on port %d in %s mode", this.address().port, app.settings.env);
  });
