var app = require('./app/config/express')();

app.listen(app.get('port'), function () {

});