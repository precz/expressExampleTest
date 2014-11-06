(function(){
  'use strict';

  var 
    app = require('express')(),
    router = require('./router'),
    server;

  router.register(app);

  exports.listen = function () {
    server = app.listen.apply(app, arguments);
  };

  exports.close = function (callback) {
    server.close(callback);
  };
}());
