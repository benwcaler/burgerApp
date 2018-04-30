var express = require("express");
var router = express.Router();
var burger = require("./../models/burger.js");

router.get("/", function (req, res) {
  burger.selectAll(function (data) {
    res.render("index", { burgers: data });
  })
});

router.post("/api/burgers", function (req, res) {
  burger.insertOne("burger_name", [req.body.burger_name], function (result) {
    res.json({ id: result.insertId });
  });
});

router.put("/api/burgers", function(req, res) {
  burger.updateOne("devoured", true, "burger_name", req.body.burger_name, function(result){
    res.status(200).end();
  });
});

module.exports = router;