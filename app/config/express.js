var express = require('express');
var bodyParser = require('body-parser');
var consign = require('consign');

module.exports = function () {
    var app = express();

    app.use(bodyParser.urlencoded({ extended: true }));
    app.use(bodyParser.json());

    consign({ verbose: true })
        .include('./app/routes')
        .into(app);

    //app.use('/template', express.static('./contrato/'));
    return app;

}