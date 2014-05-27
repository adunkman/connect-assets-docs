var home = function (app) {
  app.get("/", home.about);
};

home.about = function (req, res, next) {
  return res.render("home/about");
};

module.exports = home;
