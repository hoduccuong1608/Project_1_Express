var mysql = require('mysql');

var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "manh2001",
  database: 'project_1'
});

con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
});
module.exports = con;

