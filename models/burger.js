var orm = require("../config/orm.js");

var burger = {
  selectAll: function(callback) {
    orm.selectAll("burgers", function(res){
      callback(res);
    })
  },
  insertOne: function(colToSearch, valOfCol, callback) {
    orm.insertOne("burgers", colToSearch, valOfCol, function(res){
      callback(res);
    })
  },
  updateOne: function(colName, bool, colName, value, callback) {
    orm.UpdateOne("burgers", colName, bool, colName, value, function(res){
      callback(res);
    })
  }
}

module.exports = burger;