var expect = require("expect.js");
var mocha = require("mocha");
var server = require("../server");

describe("server", function () {
  it("exports a http server", function () {
    var http = require("http");
    expect(server).to.be.a(http.Server);
  });

  it("boots without exploding in flames", function (done) {
    server.listen(0, server.close.bind(server, done));
  });
});
