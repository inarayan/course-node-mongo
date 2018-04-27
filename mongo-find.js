var MongoClient = require('mongodb').MongoClient;
var objectId = require('mongodb').ObjectID;

var url = "mongodb://localhost:27017";

MongoClient.connect(url, function(err, client){
    if (err){
        console.log("Error while connecting to DB");
    }else
    {
        //Get the DB
        const db = client.db("test");

        //Get the collection
        const collection = db.collection("users");


        collection.find({name:"Indra"}).toArray(function(err,docs){
            if(err){
                console.log("Error while retreiving the documents");
            }else{
                console.log(docs);
            }
        })
        console.log("connected to database successfully");

        client.close();
    }
})