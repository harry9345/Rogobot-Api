var express = require("express");
var router = express.Router();

/* GET home page. */
router.get("/", function (req, res, next) {
  res.render("", { title: "RogoBot" });
});

function randumNum(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

router.get("/localization/stats", (req, res) => {
  res.json({
    front: randumNum(40, 160),
    right: randumNum(40, 160),
    back: randumNum(40, 160),
    left: randumNum(40, 160),
  });
});

module.exports = router;
