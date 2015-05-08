define(['mongodb', 'private/db-api'], function(mongodb, dbApi) {
    function initialize() {
        var MongoClient = mongodb.MongoClient,
            Server = mongodb.Server;
        console.log('inside configDb');
        // var mongoClient = new MongoClient(new Server('localhost', 27017));
        // mongoClient.open(function(err, mongoclient) {
        //     var db = mongoclient.db("todoAppDB");
        //     dbApi.initialize(db);
        // });

        var server = 'mongodb://localhost:27017/sampleDB';
        MongoClient.connect(server, function(err, db){
            dbApi.initialize(db);
        });

    }
    return {
        initialize: initialize
    }
});