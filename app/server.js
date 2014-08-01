(function(){
  'use strict';

  var 
    express = require('express'),
    app = express(),
    userRoute = require('./routes/user').register(app),
    server;

  app.get('/', function(req, res){
    res.send('This is my backend sever!');
  });

  exports.listen = function () {
    server = app.listen.apply(app, arguments);
  };

  exports.close = function (callback) {
    server.close(callback);
  };
}());
