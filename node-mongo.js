var mongoDbClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017";

mongoDbClient.connect(url,(err,client)=>{
    if (err){
        console.log("Error while connecting to Database");
    }
    else {

        const db = client.db("test");
        console.log("Connected to test database");

        //create a collection and insert the record
        db.collection('users').insertOne({
            name:"Indra",
            age:31,
            location:"Virginia Beach"
        },function(err, resp){
            if (err){
                console.log("Error occured while inserting record in the database");
            }
        })

        client.close();
    }
});

