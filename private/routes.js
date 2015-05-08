define(['./db-api','exports','passport','passport-local'],function(dbApi,exports,passport,localStrategy){
	exports.initialize = function(expressApp){
		console.log('inside routes');
		var app = expressApp;

		//passport configurations
		app.use(passport.initialize());
		app.use(passport.session());

		passport.serializeUser(function(user, done) {
		  	done(null, user);
		});

		passport.deserializeUser(function(user, done) {
		  	done(null, user);
		});

		passport.use(new localStrategy({
				passReqToCallback : true
			},
    	  	function(req, username, password,done) {
	    	  	dbApi.checkForUser(username,function(err, user) {
	    	      	if(err){
	    	      		return done(err);

	    	      	}if (!user) {
		    	        return done(null, false);		    	    
		    	    }else{
		    	    	return done(null, user);
		    	    }
		    	    
	    	    });
	    	}
	    ));

	    function passportAuthenticate(req,res,next){
	    	passport.authenticate('local', function(err, user, info) {
		  		console.log(user);
			    if (err){ 
			    	return next(err);

			   	}if(!user){
			   		return res.send({
			   			status:'authentication failure'
			   		});

			   	}else{
			   		if(user.password === req.body.password){
	   				   	req.logIn(user, function(err){
	   				      	if (err) {
	   				      		return next(err); 
	   				      	}
	   			      		res.send({
	   			   				status:'authenticated'
	   			   			});
	   				    });
	   				}else{
	   					res.send({
	   						status:'password failure'
	   					})
	   				}				   	
				}    
		  	})(req, res, next);
	    }

	    //initializing routes
		
		app.get('/',function(req,res){
		    console.log('request to /');
			if(req.user !== undefined){
				console.log(req.user);
				res.render('index',{name:req.user.username});
			}
			else{
				res.render('index',{name:null});
			}
		});

		app.post('/authenticate', function(req, res, next) {
		  	passportAuthenticate(req,res,next);
		});

		app.get('/logout',function(req,res){
			req.logOut();
			res.redirect('/');
		});
	}	

})