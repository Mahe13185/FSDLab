import http from 'http';
const server = http.createServer((req, res) => {
    res.writeHead(200, { "content-Type": "Text/html" });
    res.write("<h1>Hello World</h1>");
    res.write("<p>This is a sample http server</p>");
    res.end();
});
server.listen(3000, () => {
    console.log("Server running at http://localhost:3000");
});