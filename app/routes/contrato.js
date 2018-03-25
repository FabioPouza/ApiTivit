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
                    var contrato = {
                        "datahora": "9999-99-99 99:9999",
                        "dataatendimento": "9999-99-99",
                        "dataexpurgo": "9999-99-99",
                        "qtdiasatendimento": "999",
                        "contrato": "9999999999",
                        "codigostatus": "999",
                        "msgstatus": "Contrato retornado",
                        "imagemcontrato": base64String
                    }
                    res.json({ 'contrato': contrato });
                }
            });



            // fs.readFile('./app/contrato/contratoTivit.pdf', function (err, content) {
            //     if (err) {
            //         res.json({ 'ERRO': 'Contrato nao encontrado' });
            //     } else {
            //         var contrato = {
            //             "datahora": "9999-99-99 99:9999",
            //             "dataatendimento": "9999-99-99",
            //             "dataexpurgo": "9999-99-99",
            //             "qtdiasatendimento": "999",
            //             "contrato": "9999999999",
            //             "codigostatus": "999",
            //             "msgstatus": "XXXXXXX",

            //         }
            //         res.setHeader('Content-disposition', 'attachment; filename=contratoTivit.pdf');
            //         res.json({ 'contrato': contrato, content });
            //     }
            // });

            //res.json(contrato);

        }

        //console.log(json.contrato);


    });

}