'use strict';

const http = require('http');
const fs = require('fs');

http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/html' });
  //Replace synchronous method (fs.readFileSync) with a stream. This will make it non blocking, then pipe the stream to the response(res).
  // let html = fs.readFileSync(__dirname + '/index.htm');
  // res.end(html);
  fs.createReadStream(__dirname + '/index.htm', 'utf8').pipe(res);
}).listen(1334, '127.0.0.1');