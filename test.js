    var express = require('express');
    var app = express();

    app.get('/', function(req, res) {
        res.setHeader('Content-Type', 'text/plain');
        res.send('Vous​ ​êtes​ ​à​ ​l\'accueil​ ​de​ ​l\'​ ​API');
    });

    app.get('/sous-sol', function(req, res) {
        res.setHeader('Content-Type', 'text/plain');
        res.send('Vous​ ​êtes​ ​dans​ ​la​ ​cave​ ​à​ ​vins,​ ​ces​ ​bouteilles​ ​sont​ ​à​ ​moi​ ​!');
    });
    app.get('/etage/:etagenum/chambre', function(req, res) {
        res.setHeader('Content-Type', 'text/plain');
        res.send('Vous​ ​êtes​ ​à​ ​la​ ​chambre​ ​de​ ​l\'étage​ ​n°' + req.params.etagenum);
    });

    app.get('/etage/:etagenum/chambre/:numchambre', function(req, res) {
        res.setHeader('Content-Type', 'text/plain');
        res.send('Vous​ ​êtes​ ​à​ ​la​ ​chambre​ ​de​ ​l\'étage​ ​n°' + req.params.etagenum + 'chambre n° : ' + req.params.numchambre);
    });

    app.get('/meteo', function(req, res) {
        res.setHeader('Content-Type', 'application/json');
        res.send({test : 'Bonjour'});
    });



    app.use(function(req, res, next) {
        res.setHeader('Content-Type', 'text/plain');
        res.send(404, 'Page​ ​introuvable​ ​!');
    });

    app.listen(8080);