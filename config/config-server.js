define(
	[
		'express',
		'express-session',
    	'path',
    	'body-parser',
    	'cookie-parser',
	    //'serve-favicon',
	    'method-override',
	    'morgan',	    
	    'private/routes',
	],function(express, expressSession,path, bodyParser, cookieParser, methodOverride, morgan,routes){
		function initialize(){
			var expressInstance = express(),
				MongoStore = require('connect-mongo')(expressSession);
			
			//Set directory for express to load static files like css
			expressInstance.use(express.static('./public'));
			
			//Set the view engine and view directory path for express
			expressInstance.set('views', 'views');
			expressInstance.engine('html', require('hogan-express'));
			expressInstance.set('view engine', 'html');

			expressInstance.use(cookieParser('Ashwin'));
			expressInstance.use(bodyParser.json());
			    
		    expressInstance.use(bodyParser.urlencoded({
		        extended: true,
		    }));

		    expressInstance.use(expressSession({
		     	store: new MongoStore({
			        db: 'todoAppDB',
		      	}),
		      	secret: 'Ashwin',
		      	saveUninitialized: true,
		      	resave: true

		    }));		    

		    // expressInstance.use(function(req, res, next) {
	     //    //To block request for html without being authenticated
	     //    	console.log(req.user);
		    //     if (req.user) {
		    //         console.log("request Authenticated");
		    //         express.static("./private")(req,res,next);
		    //     } else {
		    //         console.log("Request not authenticated");
		    //         next();
		    //     }
	    	// });

	    	expressInstance.use(methodOverride());
	    	routes.initialize(expressInstance);
	    	
	    	return expressInstance;
	    }
    	return {
			initialize:initialize
		}
	}
);

/*
If you're using urlencoded with { extended:false }, req.body will return the unparsed raw string from the form categoryName=test.
Meaning req.body.categoryName will be undefined.

Try passing true so it can parse the form data using the qs module.
*/