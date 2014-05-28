var hljs = require("highlight.js");

var demo = function (app) {
  app.locals.demo = demo.helper;
};

demo.helper = function (code) {
  var evaluated = eval(code);

  return [
    '<div class="demo">',
      '<div class="input">',
        '<code class="block">', hljs.highlight("javascript", code).value, '</code>',
      '</div>',
      '<div class="output">',
        '<code class="block">', hljs.highlight("html", evaluated).value, '</code>',
      '</div>',
    '</div>'
  ].join("");
};

module.exports = demo;
