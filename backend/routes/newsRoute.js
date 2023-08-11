const express = require("express");
const {
  createNew,
  getAll,
  updateData,
  deleteData,
  getsingle,
} = require("../controllers/newsController");
const { isAuthenticatedUser, authorizeRoles } = require("../meddleware/auth");

const router = express.Router();

router.route("/create-new").post(isAuthenticatedUser, createNew);
router.route("/getall").get(getAll);
router.route("/update-news/:id").put(isAuthenticatedUser, updateData);
router.route("/delete/news/:id").delete(isAuthenticatedUser, deleteData);
router.route("/getsingle-news/:id").get(isAuthenticatedUser, getsingle);

module.exports = router;
