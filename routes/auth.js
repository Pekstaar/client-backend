const express = require("express");

const router = express.Router();

// middleWares
const { authCheck } = require("../middleware/auth");

// controller - import for externally created callbacks
const { createOrUpdateUser } = require("../controllers/auth");
//route
// takes 2 arguments(url, callback to access response and request)
router.post("/create-or-update-user", authCheck, createOrUpdateUser);

const middleWare = (req, res, next) => {
  console.log("Im a middle ware");
  console.log("Loading to next...");
  next();
};

router.get("/testing", middleWare, (req, res) => {
  res.json({
    data: "YOU HIT MIDDLEWARE",
  });
});

module.exports = router;
