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
  updateOne: function(col1Name, bool, col2Name, value, callback) {
    orm.updateOne("burgers", col1Name, bool, col2Name, value, function(res){
      callback(res);
    })
  }
}

module.exports = burger;