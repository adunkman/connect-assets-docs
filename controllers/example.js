var example = function (app) {
  app.get("/examples/:slug", example.show);
};

example.show = function (req, res, next) {
  var slug = req.params.slug;

  return res.render("example/" + slug, {
    title: slug
  });
};

module.exports = example;
