var jade = require("jade/lib/runtime");

var demo = function (app) {
  app.locals.demo = demo.helper;
};

demo.helper = function (code) {
  var evaluated = eval(code);

  return [
    '<div class="demo">',
      '<code class="pre">', jade.escape(code), '</code>',
      '<code class="post">', jade.escape(evaluated), '</code>',
    '</div>'
  ].join("");
};

module.exports = demo;
