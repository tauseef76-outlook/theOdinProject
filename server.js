const http = require("http");
const fs = require("fs");
const url = require ("url");

http.createServer((req,res) => {
    let q = url.parse(req.url,true);
    let fname = "."+q.pathname+".html";
    fs.readFile(fname, (err,data) => {
        if(err){
            fs.readFile("404.html",(err,data) => {
                res.end(data);
            })
        }else{
            res.writeHead(200,{"Content-Type" : "text/html"});
            res.write(data);
            res.end();
        }
    })
}).listen(8080),console.log("check 8080");
