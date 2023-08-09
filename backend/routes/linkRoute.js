const express = require('express')
const { createLink, getLinks, updateLink, deleteLink, getsingleLink } = require('../controller/linkController')
 const router = express.Router()


 router.route("/createlink").post(createLink)
 router.route("/getlinks").get(getLinks)
 router.route("/updatelink/:id").put(updateLink)
 router.route("/deletelink/:id").delete(deleteLink)
 router.route("/getsinglelink/:id").get(getsingleLink)

 module.exports = router