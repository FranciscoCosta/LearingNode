const http = require('http');
const server = http.createServer((req,res)=>{
    if(req.url=== '/'){
        res.end('Home Page')
    }
    if(req.url === '/about'){
        res.end("About Page")
    }
    res.end("404 PAGE NOT FOUND")
})

server.listen(5000, ()=>{
    console.log('Server listening on Port 5000....')
})