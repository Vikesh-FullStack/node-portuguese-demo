var pg = require('pg');
var conString = "postgres://postgres:Softuvo@1234@localhost:5432/portuguese";

var client = new pg.Client(conString);
client.connect(function(err) {
    if (err) throw err;
    console.log("Connected!");
  });

module.exports = client;