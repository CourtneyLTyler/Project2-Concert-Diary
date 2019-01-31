const express = require("express");
const router = express.Router();
const concertController = require("../controllers/concert");

router.put("/:id", concertController.requireAuth, concertController.update);
router.post("/", concertController.requireAuth, concertController.create);
router.get("/new", concertController.requireAuth, concertController.new);
router.get("/:id", concertController.show);
router.delete("/:id", concertController.requireAuth, concertController.delete)

module.exports = router;