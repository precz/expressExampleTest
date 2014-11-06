(function(){
    'use strict';

    var
      server = require('../../app/server'),
      assert = require('assert'),
      http = require('http');

    describe('functional/welcome', function () {
      before(function () {
        server.listen(8000);
      });

      it('should show welcome message', function(done){
        http.get('http://localhost:8000', function (res) {
          var data = '';

          res.on('data', function (chunk) {
            data += chunk;
          });

          res.on('end', function () {
            assert.equal('This is my backend sever!', data);
            done();
          });
        });
      });

      after(function () {
        server.close();
      });
    });
}());