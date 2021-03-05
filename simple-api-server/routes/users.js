var express = require("express");
var router = express.Router();

const users = [
  {
    id: 1,
    name: "chan",
  },
  {
    id: 2,
    name: "wook",
  },
  {
    id: 3,
    name: "sang",
  },
];
/* GET users listing. */
router.get("/", function (req, res, next) {
  return res.json(users);
});

module.exports = router;
