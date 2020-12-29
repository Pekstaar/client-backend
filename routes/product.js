const express = require("express");
const { adminCheck, authCheck } = require("../middleware/auth");
const router = express.Router();
const { create } = require("../controllers/product");

router.post("/product", authCheck, adminCheck, create);

module.exports = router;
