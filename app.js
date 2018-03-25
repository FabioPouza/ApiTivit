var app = require('./app/config/express')();

app.set('port', (process.env.PORT || 5000));

app.listen(app.get('port'), function () {

});