    var express = require('express');
    var app = express();
    var session =  require('express-session');
    app.use (session ({secret: 'ssshhhhh'}));

    app.post('/ajouter', function(req, res) {
        res.setHeader('Content-Type', 'application/json');
        console.log(req.param.value);
        // req.session.liste = req.session.liste + req.param.value;
    });

    
    app.use(function(req, res, next) {
        res.setHeader('Content-Type', 'text/plain');
        res.send(404, 'Page​ ​introuvable​ ​!');
    });

    app.listen(8080);