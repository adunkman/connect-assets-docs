if (process.env.NODE_ENV === "production") {
  var newrelic = require("newrelic");
}

var express = require("express");
var http = require("http");
var fs = require("fs");
var app = express();

app.set("view engine", "jade");

if (process.env.NODE_ENV !== "production" && process.env.NODE_ENV !== "test") {
  app.use(require("morgan")("dev"));
}

app.use(require("connect-assets")());


var helpers = fs.readdirSync("helpers");
for (var i = helpers.length - 1; i >= 0; i--) {
  require("./helpers/" + helpers[i])(app);
};

var controllers = fs.readdirSync("controllers");
for (var i = controllers.length - 1; i >= 0; i--) {
  require("./controllers/" + controllers[i])(app);
};

if (require.main === module) {
  http.createServer(app).listen(process.env.PORT || 3000, function () {
    console.log("listening on", this.address());
  });
}
else {
  module.exports = http.createServer.bind(http, app);
}
