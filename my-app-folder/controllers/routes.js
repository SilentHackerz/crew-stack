var authApi = require('./routes/auth-api');

function initialize(expressInstance){
	
	authApi.initialize(expressInstance);		
}

exports.initialize = initialize;