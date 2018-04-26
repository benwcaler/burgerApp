var orm = ("./../config/orm.js");

var burger = {
  selectAll: function(callback) {
    orm.selectAll("burgers", function(res){
      callback(res);
    })
  },
  insertOne: function(callback) {
    orm.insertOne("burgers", function(res){
      callback(res);
    })
  },
  updateOne: function(callback) {
    orm.UpdateOne("burgers", function(res){
      callback(res);
    })
  }
}