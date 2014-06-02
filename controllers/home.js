var home = function (app) {
  app.get("/", home.about);
  app.get("/ping", home.ping);
};

home.about = function (req, res, next) {
  return res.render("home/about");
};

home.ping = function (req, res, next) {
  require("newrelic").setIgnoreTransaction(true);
  return res.send("pong");
};

module.exports = home;
