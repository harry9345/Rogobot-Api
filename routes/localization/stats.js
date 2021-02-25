var express = require("express");
var router = express.Router();

/* GET users listing. */
router.get("/", function (req, res, next) {
  res.render("localization/stats", { title: "Stats" });
});

module.exports = router;
