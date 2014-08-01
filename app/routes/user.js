(function(){

  exports.register = function(app) {
    app.get('/user/singup', function(req, res){
      res.send({status: 'fail', message: 'Missing application token.'});
    });
  };

}());