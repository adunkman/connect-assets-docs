var expect = require("expect.js");
var mocha = require("mocha");
var server = require("./util/server");

describe("controllers/home", function () {
  beforeEach(server.boot);
  afterEach(server.shutdown);

  describe("routes", function () {
    it("responds to GET /", function (done) {
      this.get("/", function (err, res, body) {
        expect(err).to.be(null);
        expect(res.statusCode).to.be(200);
        expect(body).to.contain("<!DOCTYPE html>");
        done();
      });
    });
  });
});
