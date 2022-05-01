var http = require('http');
var httpProxy = require('http-proxy');
var proxy = httpProxy.createProxyServer({});

http.createServer(function(req, res) {
    proxy.web(req, res, { target: 'https://api.eu-gb.assistant.watson.cloud.ibm.com' });
}).listen(3000);

console.log('Simple proxy listening on 3000')