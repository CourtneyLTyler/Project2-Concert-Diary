const express = require("express")
const router = express.Router()
const concertController = require("../controllers/concert")



router.post("/", questionController.requireAuth, questionController.create);
router.get("/new", questionController.requireAuth, questionController.new);
router.get("/:id", questionController.show);
router.put("/:id", questionController.requireAuth, questionController.update);
router.delete("/:id", questionController.requireAuth, questionController.delete)


router.post("/", concertController.requireAuth, concertController.create)
router.get("/new", concertController.requireAuth, concertController.new)
router.get("/:id", concertController.show)
router.put("/:id", concertController.requireAuth, concertController.update)
router.delete("/:id", concertController.requireAuth, concertController.delete)

module.exports = router