(function(){
  'use strict';

  var
    server = require('../../app/server'),
    assert = require('assert'),
    http = require('http');

  describe('functional/server', function () {
    before(function () {
      server.listen(8000);
    });

    it('should return 200', function (done) {
      http.get('http://localhost:8000', function (res) {
        assert.equal(200, res.statusCode);
        done();
      });
    });

    after(function () {
      server.close();
    });
  });
}());