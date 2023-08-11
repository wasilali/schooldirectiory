const express = require("express");
const {
  createLink,
  getLinks,
  updateLink,
  deleteLink,
  getsingleLink,
} = require("../controllers/linkController");
const { isAuthenticatedUser } = require("../meddleware/auth");
const router = express.Router();

router.route("/createlink").post(isAuthenticatedUser, createLink);
router.route("/getlinks").get(getLinks);
router.route("/updatelink/:id").put(isAuthenticatedUser, updateLink);
router.route("/deletelink/:id").delete(isAuthenticatedUser, deleteLink);
router.route("/getsinglelink/:id").get(isAuthenticatedUser, getsingleLink);

module.exports = router;
