const express = require('express');
const path = require('path');
const app = express();
app.use(express.static(__dirname + '/dist/app-galicia'));
app.listen(process.env.PORT || 8080);
app.get('/*', function(req, res) {
    res.sendFile(path.join(__dirname +
        '/dist/app-galicia/index.html'));
});
console
    .log("Puto el que lee")
