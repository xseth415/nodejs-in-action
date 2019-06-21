const http = require("http");
const httpStatus = require("http-status-codes");

const app = http.createServer();

const port = 3000;

// Convert the object into a string of JSON Object
const getJSONString = obj => {
  return JSON.stringify(obj, null, 2);
};

app.on("request", (req, res) => {
  // create an array to hold chunks of contents
  var body = [];

  // process it in another callback function
  req.on("data", bodyData => {
    // add received data to the boy array
    body.push(bodyData);
  });

  // run code when data transmission ends
  req.on("end", () => {
    // convert the body array to a string of text
    body = Buffer.concat(body).toString();
    // log the request's contents to your console
    console.log(`Request Body Content: ${body}`);
  });

  // log our req object as a string
  console.log(`Method: ${getJSONString(req.method)}`);
  console.log(`URL: ${getJSONString(req.url)}`);
  console.log(`Header: ${getJSONString(req.headers)}`);

  res.writeHead(httpStatus.OK, { "Content-Type": "text/html" });

  let responseMessage = "<h1>This will show on the screen.</h1>";

  res.end(responseMessage);
});

app.listen(port);

console.log(`The server has started and is listening on port number: ${port}`);
