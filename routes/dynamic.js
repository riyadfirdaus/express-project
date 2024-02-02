const express = require("express");
const router = express.Router();

router.get("/:name/:id", (req, res) => {
  res.send(`Hello ${req.params.name}! your id is ${req.params.id}`);
});

module.exports = router;
