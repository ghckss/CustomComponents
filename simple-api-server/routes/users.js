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

const hasDuplicateId = (id) => {
  return users.filter((user) => user.id === id).length > 0;
};

router.get("/", function (req, res, next) {
  return res.json(users);
});

router.get("/:id", function (req, res, next) {
  const id = parseInt(req.params.id, 10);
  if (!id) {
    return res.status(400);
  }
  const user = users.filter((user) => user.id === id)[0];
  if (!user) {
    return res.status(400);
  }
  return res.json(user);
});

router.post("/", function (req, res, next) {
  const body = req.body;

  const name = body.name;
  const id = parseInt(body.id, 10);

  if (!id) {
    return res.status(400);
  }

  if (!name) {
    return res.status(400);
  }

  if (hasDuplicateId(id)) {
    return res.status(400);
  }

  users.push({
    id,
    name,
  });
  return res.json(users);
});

router.delete("/:id", function (req, res, next) {
  const id = parseInt(req.params.id, 10);
  if (!id) {
    return res.status(400);
  }

  const userIndex = users.findIndex((user) => {
    return user.id === id;
  });
  if (userIndex === -1) {
    return res.status(400);
  }
  users.splice(userIndex, 1);

  return res.json(users);
});

module.exports = router;
