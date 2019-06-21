const http = require("http");
const httpStatus = require("http-status-codes");

const app = http.createServer();

const port = 3000;

const getJSONString = obj => {
  return JSON.stringify(obj, null, 2);
};

app.on("request", (req, res) => {
  res.writeHead(httpStatus.OK, { "Content-Type": "text/html" });

  let responseMessage = "<h1>This will show on the screen.</h1>";

  console.log(`Method: ${getJSONString(req.method)}`);
  console.log(`URL: ${getJSONString(req.url)}`);
  console.log(`Header: ${getJSONString(req.headers)}`);

  res.end(responseMessage);
});

app.listen(port);

console.log(`The server has started and is listening on port number: ${port}`);
