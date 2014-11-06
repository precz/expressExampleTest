(function(){
	var mainController = require('./controllers/main');
	exports.register = function listen (app) {
		app.get('/', mainController.get);
	};
}());