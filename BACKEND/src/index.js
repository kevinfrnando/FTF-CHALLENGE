import http from 'http';
import 'dotenv/config';
import axios from 'axios';

const server = http.createServer(( req, res )=>{
    const { url, method } = req;

    if( method === "GET" && ( url === "/user" || url === "/repo")){
        const endPoint = url === "/user" ? "/users/kevinfrnando": "/repos/kevinfrnando/FTF-CHALLENGE/commits";
        try{
            axios.get( `${process.env.API}${endPoint}`, {
                headers: {
                    'Authorization': `token ${process.env.API_KEY}`
                }  
            } ).then( r => {
                res.setHeader('Access-Control-Allow-Origin', '*');
                res.setHeader('Access-Control-Allow-Methods', 'OPTIONS, GET');
                res.setHeader('Access-Control-Max-Age', 2592000); // 30 days
                res.writeHead(200, {'Content-Type':'application/json'} );
                res.write(JSON.stringify( r.data ));
                res.end();
            })
        }catch( e ){
            res.setHeader('Access-Control-Allow-Origin', '*');
            res.setHeader('Access-Control-Allow-Methods', 'OPTIONS, GET');
            res.setHeader('Access-Control-Max-Age', 2592000); // 30 days
            res.writeHead(200, {'Content-Type':'application/json'} );
            res.write(JSON.stringify([{}]));
            res.end();
        }
    }else{
        res.setHeader('Access-Control-Allow-Origin', '*');
        res.setHeader('Access-Control-Allow-Methods', 'OPTIONS, GET');
        res.setHeader('Access-Control-Max-Age', 2592000); // 30 days
        res.writeHead(404, {'Content-Type':'application/json'} );
        res.write(JSON.stringify([{}]));
        res.end();
    }

});

server.listen( process.env.PORT );

