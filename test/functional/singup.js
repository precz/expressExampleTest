(function(){
  'use strict';

  var
    server = require('../../app/server'),
    assert = require('assert'),
    http = require('http');

  describe('singup', function () {
    before(function () {
      server.listen(8000);
    });

    it('should return error', function(done){

      http.get('http://localhost:8000/user/singup', function (res) {
        var data = '';

        res.on('end', function () {
          assert.deepEqual({status: 'fail', message: 'Missing application token.'}, JSON.parse(data), 'missing application token');
          done();
        });

        res.on('data', function (chunk) {
          data += chunk;
        });

        assert.equal(200, res.statusCode);
      });

    });

    it('should return auth token', function(done){

      http.get('http://localhost:8000/user/singup?appToken=10', function (res) {
        var data = '';

        res.on('end', function () {
          assert.deepEqual({status: 'ok', auth_token: '10'}, JSON.parse(data), 'missing application token');
          done();
        });

        res.on('data', function (chunk) {
          data += chunk;
        });

        assert.equal(200, res.statusCode);
      });

    });

    after(function () {
      server.close();
    });
  });
}());