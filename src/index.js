const http = require("http");

// Require the fs module.
const fs = require("fs");

const port = 3000;

// Set up route mapping for HTML files.
const routeMap = {
  "/": "views/index.html"
};

// Create a function to interpolate the URL into the file path.
const getViewUrl = url => {
  return `views${url}.html`;
};

http
  .createServer((req, res) => {
    // Get the file-path strings.
    let viewUrl = getViewUrl(req.url);

    // Interpolate the request URL into your fs file search.
    fs.readFile(viewUrl, null, (error, data) => {
      // Handle the errors with a 404 response code.
      if (error) {
        res.writeHead(404);
        res.write("<h1>FILE NOT FOUND</h1>");
      } else {
        // Respond with the file contents
        res.writeHead(200, { "Content-Type": "text/html" });
        res.write(data);
      }
      res.end();
    });
  })
  .listen(3000);

console.log(`The server has started and is listening on port number: ${port}`);
