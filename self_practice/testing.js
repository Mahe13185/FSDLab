console.log("Mahendra")

import http from 'http';
const server = http.createServer((req, res) => {
    console.log(req.url);
    res.writeHead(200, { "content-type": "Text/html" });
    res.write("<h1>This is Heading</h1>");
    res.end("The End");
});

server.listen(2001, () => {
    console.log("Server is Running at 2001");
});