(function () {
	var
		sinon = require('sinon'),
		assert = require('chai').assert;

	describe('unit/controllers/main', function () {
		var
			send,
			res,
			main;

		before(function () {
			main = require('../../../app/controllers/main');
			send = sinon.stub();
			res = {
				send: send
			};
		});

		it('should response with proper message', function () {
			main.get(undefined, res);

			assert.isTrue(
				send.calledWith('This is my backend sever!'),
				'send was called with proper message'
			);
		});
	});
}());