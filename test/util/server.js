var request = require("request");
var app = require("../../server");

var server = {
  boot: function (done) {
    var context = this;

    app.listen(0, function () {
      var url = "http://localhost:" + this.address().port;

      context.server = this;
      context.get = passthru("get", url);

      done();
    });
  },
  shutdown: function (done) {
    this.server.close(done);
  }
};

module.exports = server;

var passthru = function (method, url) {
  return function (path, callback) {
    return request[method](url + path, callback);
  };
};
