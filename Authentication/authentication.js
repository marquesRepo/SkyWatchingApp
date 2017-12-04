'use strict';
const {router} = require('./router');
const {localStrategy, jwtStrategy} = require('./strategies');

function signUp() {
	$(".createAccount").on("click", function(){
		$(".signUp").show();
	});
}
signUp()

module.exports = {router, localStrategy, jwtStrategy};

