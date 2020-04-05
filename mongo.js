var MongoClient = require("mongodb").MongoClient;
// Importing the createCollection module
var createCollection = require("./collection");
// Database name
var dbName = "Jennifer"; 
var url =
  "mongodb+srv://jenny:jenny@cluster0-dfmzd.mongodb.net/test?retryWrites=true&w=majority";
MongoClient.connect(url, function(err, dbClient) {
  if (err) throw err;
  console.log("Database created by Jennifer"); 
  // Creating the database
  var database = dbClient.db(Jennifer);
  // Creating a collection in the database
  createCollection(database);
  dbClient.close();
});






