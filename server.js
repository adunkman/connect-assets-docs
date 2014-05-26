var express = require("express");
var http = require("http");
var app = express();
var server = http.createServer(app);

app.set("view engine", "jade");

if (process.env.NODE_ENV !== "production") {
  app.use(require("morgan")("dev"));
}

app.use(require("connect-assets")());

if (require.main === module) {
  server.listen(process.env.PORT || 3000, function () {
    console.log("listening on", this.address());
  });
}
else {
  module.exports = server;
}
