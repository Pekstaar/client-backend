const express = require("express");

const router = express.Router();

// import for externally created callbacks
const { createOrUpdateUser } = require("../controllers/auth");
//route
// takes 2 arguments(url, callback to access response and request)
router.get("/create-or-update-user", createOrUpdateUser);

module.exports = router;
