const http = require("http");

const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.end("AQUIIIIIIIIIIIIIIIIIII");
  }
  if (req.url === "/about") {
    res.end("Aqui nao");
  } else {
    res.end(`<h1>
            Aqui não pah
        </h1>`);
  }
});

//tells the port
server.listen(5000);
