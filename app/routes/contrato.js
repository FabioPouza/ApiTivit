var download = require('download-file');
var fs = require('fs');
var base64 = require('file-base64');

module.exports = function (app) {

    app.post('/contrato', function (req, res) {
        var json = req.body;
        var base = "";

        if (json.contrato != "" && json.databasecontrato != "" && json.copiaautenticada != "") {
            base64.encode('./app/contrato/contratoTivit.pdf', function (err, base64String) {
                if (err) {
                    res.json({ 'ERRO': 'Serviço indisponivel' })
                } else {
                    res.json({
                        "datahora": "2018-03-27 14:49:00",
                        "dataatendimento": "2018-03-26",
                        "dataexpurgo": "2018-03-26",
                        "qtdiasatendimento": "1",
                        "contrato": "9999999999",
                        "codigostatus": "001",
                        "msgstatus": "Contrato retornado",
                        "imagemcontrato": base64String
                    });
                }
            });
        }
    });

}