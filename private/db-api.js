define(['exports'],function(exports){
	var db;
	var ObjectID = require('mongodb').ObjectID;
	exports.initialize = function(db){
		this.db = db;
		console.log('db initialized');
	};

	exports.checkForUser = function(username,callback){
		this.db.collection("userData").findOne({
			username:username
		},callback);
	}
});