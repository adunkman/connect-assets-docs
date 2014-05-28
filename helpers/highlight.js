var hljs = require("highlight.js");

var highlight = function (app) {
  app.locals.highlight = highlight.helper;
};

highlight.helper = function (code) {
  return [
    '<code class="block">', hljs.highlightAuto(code).value, '</code>'
  ].join("");
};

module.exports = highlight;
