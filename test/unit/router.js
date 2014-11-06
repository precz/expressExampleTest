(function () {
	var 
		assert = require('chai').assert,
		sinon = require('sinon');

	describe('unit/router', function () {
		var
			getStub,
			app;

		before(function () {
			getStub = sinon.stub();
			app = {
				get: getStub
			};
		});

		it('should register all functionality', function () {
			var
				router = require('../../app/router'),
				mainController = require('../../app/controllers/main');

			router.register(app);

			assert.deepEqual(getStub.args[0][0], '/', 'main action registered');
			assert.deepEqual(getStub.args[0][1], mainController.get, 'main action assigned to main controller `get`');
		});
	});
}());