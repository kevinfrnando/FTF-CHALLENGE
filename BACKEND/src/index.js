const http = require("http");
require('dotenv').config();

const server = http.createServer(( req, res )=>{
    const { url, method } = req;
    if( method === "GET" && url === "/"){
        res.writeHead(200, {'Content-Type':'application/json'} );
        res.write(JSON.stringify({message: 'HELLO WORLDS'}));
        res.end();
    }
});

server.listen( process.env.PORT );

console.log('Server on port', process.env.PORT);