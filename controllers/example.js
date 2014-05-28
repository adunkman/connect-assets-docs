var fs = require("fs");

var example = function (app) {
  app.get("/examples/:slug", example.show);
};

example.show = function (req, res, next) {
  var slug = req.params.slug;
  var template = "example/" + slug;

  fs.stat("views/" + template + ".jade", function (err, stats) {
    if (err && err.code === "ENOENT") {
      return next();
    }
    else {
      return res.render(template, {
        title: slug,
        version: require("connect-assets/package").version
      });
    }
  });
};

module.exports = example;
