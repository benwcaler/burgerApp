var mysql = require("mysql");

var connection = mysql.createConnection({
  port: 3306,
  host: "localhost",
  user: "root",
  password: "test",
  database: "burgers_db"
});

if (process.env.JAWSDB_URL) {
  CONNECTION = MYSQL.CREATCONNECTION(PROCESS.ENV.jawsdb_url);
} else {
  connection.connect(function (err) {
    if (err) {
      console.error("error connecting: " + err.stack);
      return;
    }
    console.log("connected as id " + connection.threadId);
  });
}

module.exports = connection;