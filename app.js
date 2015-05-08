var requirejs = require('requirejs');
requirejs.config({
    //Pass the top-level main.js/index.js require
    //function to requirejs so that node modules
    //are loaded relative to the top-level JS file.
    nodeRequire: require
});

requirejs(['config/config-server', 'config/config-db','http'], function(configServer,configDb,http){
	http.createServer(configServer.initialize()).listen(8000, function () {
        console.log('server running at port '+8000);
        //configServer.initialize() returns an express server instance
        configDb.initialize();

    });
});