const http = require("http");
const url = require("url");

const server = http.createServer((req, res) => {
  console.log(req.url);

  const pathName = req.url;

  if (pathName === "/" || pathName === "/overview") {
    res.end("This is overview");
  } else if (pathName === "/products") {
    res.end("This is product");
  } else {
    res.writeHead(404, {
      "Content-type": "text/html",
    });
    res.end("<h1 style='color : red'> Page not found </h1> ");
  }
});

server.listen(5000, () => {
  console.log("Listening to port 5000");
});
