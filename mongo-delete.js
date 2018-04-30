var MongoClient = require('mongodb').MongoClient;

var ObjectID = require('mongodb').ObjectID;

var url = "mongodb://localhost:27017";

//connecting to the mongoDB
MongoClient.connect(url, function(err, client){
    if (err)
    {
        console.log('Failed to connect to the database');
    }
    else
    {
        console.log('Sucessfully connected to the database');
        //get the reference to Database test

        const db = client.db("test");

        //get the collection
        const usersCollection = db.collection("users");

        //delete multiple records meeting the criteria
        usersCollection.deleteMany({"name":"Andrew"}, function(err, res){
            if(err){
                console.log("Error while deleting the records");
            }else{
                console.log(res.deletedCount);
            }
        })

        //use findOneAndDelte to find the records and delete
        usersCollection.findOneAndDelete({"_id":new ObjectID("5ae1367baadd9e23d7cf4832")},function(err,response){
            if (err){
                console.log("Error while finding and deleting the record");
            }else{
                console.log("Deleted the records", response);
            }
        }
        );
        client.close();
    }
})