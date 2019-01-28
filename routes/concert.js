const express = require("express")
const router = express.Router()
const concertController = require("../controllers/concert")

router.post("/", concertController.create)
router.get("/new", concertController.new)
router.get("/:id", concertController.show)
router.put("/:id", concertController.update)

module.exports = router