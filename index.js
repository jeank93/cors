var host = '0.0.0.0';
var port = 7860;

var cors_proxy = require('cors-anywhere');
cors_proxy.createServer({
    originWhitelist: []
}).listen(port, host, function() {
    console.log('Running CORS Anywhere on ' + host + ':' + port);
});
