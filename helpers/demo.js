var hljs = require("highlight.js");

var demo = function (app) {
  app.locals.demo = demo.helper;
};

demo.helper = function (code) {
  var evaluated = eval(code);

  return [
    '<div class="demo">',
      '<code class="pre">', hljs.highlight("javascript", code).value, '</code>',
      '<code class="post">', hljs.highlight("html", evaluated).value, '</code>',
    '</div>'
  ].join("");
};

module.exports = demo;
