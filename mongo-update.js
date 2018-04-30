var mongoClient = require('mongodb').MongoClient;
var objectId = require('mongodb').ObjectID;

var url = 'mongodb://localhost:27017';

mongoClient.connect(url, function(err, mongoClient){
    if(err){
        console.log("unable to connect to the database");
    }else{
        console.log("successfully connect to database");

        //create the db object
        const db = mongoClient.db("test");
        //get access to collection object
        const collection = db.collection("users");

        //update a document and increment the age of that document selected via filter
        collection.findOneAndUpdate(
        {
            name:"Jen"
        },
        {
            $inc:{age:1},
            $set:{
                name:"Andrew"
            }
        },
        {
            returnOriginal:false
        }).then(function(result){
            console.log(result);
        }).catch(function(err){
            console.log("Error while updating the record");
        });
        mongoClient.close();
    }
})

