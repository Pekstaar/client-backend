const express = require("express");
const router = express.Router();

router.get("/user", (req, res) => {
  res.json({
    data: "YOU HIT the USER api ",
  });
});

module.exports = router;
