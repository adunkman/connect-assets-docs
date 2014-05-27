var expect = require("expect.js");
var mocha = require("mocha");
var server = require("./util/server");

describe("controllers/example", function () {
  beforeEach(server.boot);
  afterEach(server.shutdown);

  describe("routes", function () {
    it("responds to GET /examples/attributes", function (done) {
      this.get("/examples/attributes", function (err, res, body) {
        expect(err).to.be(null);
        expect(res.statusCode).to.be(200);
        expect(body).to.contain("<!DOCTYPE html>");
        done();
      });
    });
  });

  it("404s if example isn’t found", function (done) {
    this.get("/examples/should-404", function (err, res, body) {
      expect(err).to.be(null);
      expect(res.statusCode).to.be(404);
      done();
    });
  });
});
