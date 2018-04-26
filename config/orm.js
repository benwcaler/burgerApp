var connection = require("./connection.js");

var orm = {
  selectAll: function (tableInput, callback) {
    var query = "SELECT * FROM ??";
    connection.query(query, [tableInput], function (err, res) {
      if (err) throw err;
      callback(res);
    });
  },
  insertOne: function (tableInput, colToSearch, valOfCol, callback) {
    var query = "INSERT INTO ?? (??) VALUES (?)";
    connection.query(query, [tableInput, colToSearch, valOfCol], function (err, res) {
      if (err) throw err;
      callback(res);
    });
  },
  updateOne: function (tableInput, colName, bool, colName, value, callback) {
    var query = "UPDATE ?? SET ?? = ? WHERE ?? = ?";
    connection.query(query, [tableInput, colName, bool, colName, value], function (err, res) {
      if (err) throw err;
      callback(res);
    })
  }
}

module.exports = orm;