const express = require('express');
const http = require('http');
const path = require('path');
var app = express();
var server = http.createServer(app);

app.get('/', function (req, res) {
    res.sendFile('public/index.html', { root: __dirname });
});

app.use(express.static('public'));

server.listen(3000, 'localhost');
server.on('listening', function () {
    console.log('Server rodando: %s:%s', server.address().address, server.address().port);
});