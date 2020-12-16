const express = require("express");
const { adminCheck, authCheck } = require("../middleware/auth");
const router = express.Router();
const {
  read,
  update,
  create,
  list,
  remove,
} = require("../controllers/category");

router.post("/category", authCheck, adminCheck, create);
router.get("/category", list); //all categories query
router.get("/category/:slug", authCheck, adminCheck, read); //single category query
router.put("/category/:slug", authCheck, adminCheck, update); //update single query
router.delete("/category/:slug", authCheck, adminCheck, remove);

module.exports = router;