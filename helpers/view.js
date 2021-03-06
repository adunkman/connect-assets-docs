var path = require("path");

var view = function (app) {
  app.locals.view = view.helper;
};

view.helper = function (locals) {
  var filename = locals.filename;
  var directory = locals.settings.views + "/";
  var extension = "." + locals.settings["view engine"];

  var view = filename.replace(directory, "").replace(extension, "");

  return view.split(path.sep).join(" ");
};

module.exports = view;
